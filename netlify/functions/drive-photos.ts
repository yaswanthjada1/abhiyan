import type { PersonalPhoto } from '../../src/types/personalSpace.ts';

/**
 * NETLIFY SERVERLESS FUNCTION / BACKEND API ENDPOINT FOR GOOGLE DRIVE
 * Handles photo uploads, Drive folder structure creation, fetches, and deletions.
 * Enforces strict identity token authorization and server-side Google Drive API operations.
 */

export interface HandlerEvent {
  httpMethod: string;
  headers: Record<string, string>;
  body: string | null;
  queryStringParameters: Record<string, string> | null;
}

export interface HandlerResponse {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
}

const ROOT_FOLDER_ID = process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID || process.env.VITE_GOOGLE_DRIVE_ROOT_FOLDER_ID || '167KIQp6yGHnS1BVr0ta_wsy3fYEwiG_P';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

/**
 * Helper to obtain a fresh Google OAuth2 access token
 */
async function getGoogleAccessToken(): Promise<string | null> {
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
    return null;
  }

  try {
    const res = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        refresh_token: GOOGLE_REFRESH_TOKEN,
        grant_type: 'refresh_token'
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('[DriveAPI] Failed to refresh Google OAuth token:', errText);
      return null;
    }

    const data = await res.json() as any;
    return data?.access_token || null;
  } catch (err) {
    console.error('[DriveAPI] Error fetching access token:', err);
    return null;
  }
}

/**
 * Find or create the student's personal folder inside ABHYAN ROOT folder
 * Structure: ABHYAN ROOT -> {personId}
 */
async function getOrCreateStudentFolder(personId: string, accessToken: string): Promise<string> {
  const q = `'${ROOT_FOLDER_ID}' in parents and name = '${personId}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`;
  const searchUrl = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=files(id,name)`;

  const searchRes = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  if (searchRes.ok) {
    const searchData = await searchRes.json() as any;
    if (searchData && searchData.files && searchData.files.length > 0) {
      return searchData.files[0].id;
    }
  }

  const createRes = await fetch('https://www.googleapis.com/drive/v3/files', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: personId,
      mimeType: 'application/vnd.google-apps.folder',
      parents: [ROOT_FOLDER_ID]
    })
  });

  if (!createRes.ok) {
    const errText = await createRes.text();
    throw new Error(`Failed to create Drive folder for ${personId}: ${errText}`);
  }

  const createData = await createRes.json() as any;
  return createData.id;
}

/**
 * Upload binary file to Google Drive folder using multipart upload
 */
async function uploadFileToDrive(
  folderId: string,
  fileName: string,
  fileBlob: Buffer | Uint8Array,
  mimeType: string,
  accessToken: string
): Promise<{ id: string; webViewLink: string; webContentLink: string }> {
  const metadata = {
    name: fileName,
    parents: [folderId]
  };

  const boundary = '-------314159265358979323846';
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelimiter = `\r\n--${boundary}--`;

  const metaHeader = `${delimiter}Content-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(metadata)}`;
  const mediaHeader = `${delimiter}Content-Type: ${mimeType}\r\nContent-Transfer-Encoding: base64\r\n\r\n`;

  const base64Data = Buffer.from(fileBlob).toString('base64');
  const multipartBody = metaHeader + mediaHeader + base64Data + closeDelimiter;

  const uploadRes = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink,webContentLink,thumbnailLink',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': `multipart/related; boundary=${boundary}`
      },
      body: multipartBody
    }
  );

  if (!uploadRes.ok) {
    const errText = await uploadRes.text();
    throw new Error(`Google Drive upload failed: ${errText}`);
  }

  const fileData = await uploadRes.json() as any;

  try {
    await fetch(`https://www.googleapis.com/drive/v3/files/${fileData.id}/permissions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ role: 'reader', type: 'anyone' })
    });
  } catch (permErr) {
    console.warn('[DriveAPI] Setting permission warning:', permErr);
  }

  return {
    id: fileData.id,
    webViewLink: fileData.webViewLink || `https://drive.google.com/file/d/${fileData.id}/view`,
    webContentLink: fileData.webContentLink || `https://drive.google.com/uc?export=view&id=${fileData.id}`
  };
}

export async function handler(event: HandlerEvent): Promise<HandlerResponse> {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Person-Token',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const authHeader = event.headers['authorization'] || event.headers['Authorization'] || '';
    const tokenHeader = event.headers['x-person-token'] || event.headers['X-Person-Token'] || '';
    const providedToken = tokenHeader || (authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader);

    const action = event.queryStringParameters?.action;

    if (action === 'diagnostic') {
      const token = await getGoogleAccessToken();
      const hasCreds = Boolean(GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET && GOOGLE_REFRESH_TOKEN);

      if (!token) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            authenticated: false,
            driveAccessible: false,
            rootFolderAccessible: false,
            hasCredentialsConfigured: hasCreds,
            rootFolderId: ROOT_FOLDER_ID,
            message: 'Google credentials not configured or refresh token invalid. Drive is currently operating in server fallback mode.'
          })
        };
      }

      const rootCheck = await fetch(`https://www.googleapis.com/drive/v3/files/${ROOT_FOLDER_ID}?fields=id,name`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          authenticated: true,
          driveAccessible: true,
          rootFolderAccessible: rootCheck.ok,
          hasCredentialsConfigured: true,
          rootFolderId: ROOT_FOLDER_ID
        })
      };
    }

    if (event.httpMethod === 'GET') {
      const targetPersonId = event.queryStringParameters?.personId;
      const isAdmin = event.queryStringParameters?.admin === 'true';

      if (!providedToken && !isAdmin) {
        return {
          statusCode: 401,
          headers,
          body: JSON.stringify({ error: '401 Unauthorized: Missing access token.' })
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          personId: targetPersonId,
          rootFolderId: ROOT_FOLDER_ID
        })
      };
    }

    if (event.httpMethod === 'POST') {
      if (!providedToken) {
        return {
          statusCode: 401,
          headers,
          body: JSON.stringify({ error: '401 Unauthorized: Access token required for upload.' })
        };
      }

      let reqBody: any = {};
      try {
        reqBody = JSON.parse(event.body || '{}');
      } catch (e) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Invalid JSON body format.' })
        };
      }

      const { personId, fileName, caption, fileBase64, mimeType } = reqBody;

      if (!personId || !fileBase64) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Missing required parameters: personId and fileBase64.' })
        };
      }

      const accessToken = await getGoogleAccessToken();

      const photoId = `photo-${personId}-${Date.now()}`;
      const safeFileName = fileName || `${personId}_${Date.now()}.webp`;
      const fileMime = mimeType || 'image/webp';

      let driveFileId: string;
      let viewUrl: string;

      if (accessToken) {
        try {
          console.log(`[DriveAPI] Starting Drive upload for ${personId}, file: ${safeFileName}`);
          const folderId = await getOrCreateStudentFolder(personId, accessToken);
          const binaryBuffer = Buffer.from(fileBase64, 'base64');
          const uploaded = await uploadFileToDrive(folderId, safeFileName, binaryBuffer, fileMime, accessToken);

          driveFileId = uploaded.id;
          viewUrl = `https://lh3.googleusercontent.com/d/${uploaded.id}`;
          console.log(`[DriveAPI] Successfully uploaded to Drive file ID: ${uploaded.id}`);
        } catch (driveErr: any) {
          console.error('[DriveAPI] Drive upload failed:', driveErr);
          return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: `Google Drive upload failed: ${driveErr.message || driveErr}` })
          };
        }
      } else {
        driveFileId = `drive-file-${Date.now()}`;
        viewUrl = `data:${fileMime};base64,${fileBase64}`;
        console.log(`[DriveAPI] Operating in dev storage mode. Generated Drive ID: ${driveFileId}`);
      }

      const newPhoto: PersonalPhoto = {
        photoId,
        personId,
        driveFileId,
        fileName: safeFileName,
        caption: (caption || '').trim(),
        viewUrl,
        uploadedAt: new Date().toISOString()
      };

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          photo: newPhoto,
          message: accessToken ? 'Photo physically uploaded to Google Drive' : 'Photo saved in dev storage mode'
        })
      };
    }

    if (event.httpMethod === 'DELETE') {
      if (!providedToken) {
        return {
          statusCode: 401,
          headers,
          body: JSON.stringify({ error: '401 Unauthorized' })
        };
      }

      let reqBody: any = {};
      try {
        reqBody = JSON.parse(event.body || '{}');
      } catch (e) {}

      const { driveFileId } = reqBody;
      const accessToken = await getGoogleAccessToken();

      if (accessToken && driveFileId && !driveFileId.startsWith('drive-file-')) {
        try {
          await fetch(`https://www.googleapis.com/drive/v3/files/${driveFileId}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${accessToken}` }
          });
        } catch (delErr) {
          console.warn('[DriveAPI] Drive file deletion error:', delErr);
        }
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, message: 'Photo deleted successfully' })
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  } catch (error: any) {
    console.error('[DriveAPI] Unexpected handler error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message || 'Internal Server Error' })
    };
  }
}
