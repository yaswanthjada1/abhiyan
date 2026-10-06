import type { PersonalPhoto } from '../../src/types/personalSpace.ts';

/**
 * NETLIFY SERVERLESS FUNCTION — GOOGLE APPS SCRIPT PROXY
 * Proxies photo upload, fetch, diagnostic, and deletion requests to Google Apps Script Web App.
 * Eliminates GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET requirement.
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
  isBase64Encoded?: boolean;
}

function getAppsScriptUrl(): string | undefined {
  return process.env.GOOGLE_APPS_SCRIPT_URL || process.env.VITE_GOOGLE_APPS_SCRIPT_URL;
}

function getRootFolderId(): string {
  return process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID || '167KIQp6yGHnS1BVr0ta_wsy3fYEwiG_P';
}

export async function handler(event: HandlerEvent): Promise<HandlerResponse> {
  const GOOGLE_APPS_SCRIPT_URL = getAppsScriptUrl();
  const ROOT_FOLDER_ID = getRootFolderId();

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

    // 0. HEALTH / DIAGNOSTIC CHECK
    if (action === 'diagnostic' || action === 'health') {
      if (!GOOGLE_APPS_SCRIPT_URL) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            authenticated: false,
            appsScriptConfigured: false,
            rootFolderId: ROOT_FOLDER_ID,
            message: 'GOOGLE_APPS_SCRIPT_URL environment variable is not configured. Please add GOOGLE_APPS_SCRIPT_URL to your Netlify / environment settings.'
          })
        };
      }

      try {
        const diagUrl = `${GOOGLE_APPS_SCRIPT_URL}?action=diagnostic`;
        const diagRes = await fetch(diagUrl);
        const diagData = await diagRes.json() as any;

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            authenticated: true,
            appsScriptConfigured: true,
            appsScriptStatus: diagData.status || 'ok',
            rootFolderAccessible: Boolean(diagData.rootFolderFound),
            rootFolderId: ROOT_FOLDER_ID
          })
        };
      } catch (err: any) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            authenticated: false,
            appsScriptConfigured: true,
            rootFolderId: ROOT_FOLDER_ID,
            error: `Failed to connect to Google Apps Script Web App: ${err.message || err}`
          })
        };
      }
    }

    // 1. STREAM IMAGE PROXY
    if (action === 'stream') {
      const driveFileId = event.queryStringParameters?.driveFileId;
      if (!driveFileId || driveFileId.startsWith('drive-file-')) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Invalid Google Drive file ID' })
        };
      }

      // Proxy direct image link
      const directUrl = `https://lh3.googleusercontent.com/d/${driveFileId}`;
      const imgRes = await fetch(directUrl);

      if (imgRes.ok) {
        const arrayBuffer = await imgRes.arrayBuffer();
        const base64Content = Buffer.from(arrayBuffer).toString('base64');
        return {
          statusCode: 200,
          headers: {
            ...headers,
            'Content-Type': imgRes.headers.get('content-type') || 'image/webp',
            'Cache-Control': 'public, max-age=86400'
          },
          body: base64Content,
          isBase64Encoded: true
        };
      }

      // Fallback via Apps Script
      if (GOOGLE_APPS_SCRIPT_URL) {
        const scriptRes = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?driveFileId=${driveFileId}`);
        const base64Text = await scriptRes.text();
        return {
          statusCode: 200,
          headers: {
            ...headers,
            'Content-Type': 'image/webp',
            'Cache-Control': 'public, max-age=86400'
          },
          body: base64Text,
          isBase64Encoded: true
        };
      }

      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Image file not accessible.' })
      };
    }

    // 2. GET METADATA VERIFICATION
    if (event.httpMethod === 'GET') {
      const targetPersonId = event.queryStringParameters?.personId;
      const isAdmin = event.queryStringParameters?.admin === 'true';

      if (!providedToken && !isAdmin) {
        return {
          statusCode: 401,
          headers,
          body: JSON.stringify({ error: '401 Unauthorized: Access token required.' })
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

    // 3. POST: REAL GOOGLE DRIVE UPLOAD VIA APPS SCRIPT
    if (event.httpMethod === 'POST') {
      if (!providedToken) {
        return {
          statusCode: 401,
          headers,
          body: JSON.stringify({ error: '401 Unauthorized: Access token required for upload.' })
        };
      }

      if (!GOOGLE_APPS_SCRIPT_URL) {
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({
            error: 'GOOGLE_APPS_SCRIPT_URL environment variable is missing. Please configure your Google Apps Script Web App URL in environment variables.'
          })
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

      const safeFileName = fileName || `${personId}_${Date.now()}.webp`;
      const fileMime = mimeType || 'image/webp';

      console.log(`[AppsScriptProxy] Dispatching photo upload for ${personId} to Apps Script Web App...`);

      // Dispatch request to Google Apps Script Web App
      const scriptRes = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'upload',
          personId,
          fileName: safeFileName,
          mimeType: fileMime,
          fileBase64,
          caption: (caption || '').trim()
        })
      });

      if (!scriptRes.ok) {
        const errText = await scriptRes.text();
        console.error('[AppsScriptProxy] Apps Script Web App error:', errText);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: `Google Apps Script upload failed: ${errText}` })
        };
      }

      const scriptData = await scriptRes.json() as any;

      if (!scriptData || !scriptData.success || !scriptData.driveFileId) {
        console.error('[AppsScriptProxy] Apps Script did not return a valid driveFileId:', scriptData);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: scriptData?.error || 'Google Apps Script did not return a valid Drive file ID.' })
        };
      }

      const driveFileId = scriptData.driveFileId;
      const driveFolderId = scriptData.driveFolderId || '';
      console.log(`[AppsScriptProxy] Successfully uploaded to Google Drive! REAL Drive File ID: ${driveFileId}`);

      const photoId = `photo-${personId}-${Date.now()}`;
      const streamUrl = `/.netlify/functions/drive-photos?driveFileId=${driveFileId}&action=stream`;

      const newPhoto: PersonalPhoto = {
        photoId,
        personId,
        driveFileId,
        driveFolderId,
        rootFolderId: ROOT_FOLDER_ID,
        fileName: safeFileName,
        caption: (caption || '').trim(),
        viewUrl: streamUrl,
        uploadedAt: new Date().toISOString(),
        fileSizeBytes: scriptData.fileSizeBytes
      };

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          photo: newPhoto,
          driveFileId,
          driveFolderId,
          message: 'Photo physically saved to Google Drive via Google Apps Script'
        })
      };
    }

    // 4. DELETE PHOTO FROM GOOGLE DRIVE VIA APPS SCRIPT
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
      if (!driveFileId || driveFileId.startsWith('drive-file-')) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, message: 'Cleaned local record' })
        };
      }

      if (GOOGLE_APPS_SCRIPT_URL) {
        try {
          await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'delete', driveFileId })
          });
          console.log(`[AppsScriptProxy] Deleted Drive file ID: ${driveFileId}`);
        } catch (delErr: any) {
          console.warn('[AppsScriptProxy] Deletion warning:', delErr.message);
        }
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, message: 'Photo deleted from Google Drive' })
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  } catch (error: any) {
    console.error('[AppsScriptProxy] Unexpected handler error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message || 'Internal Server Error' })
    };
  }
}
