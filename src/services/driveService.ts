import { PersonalPhoto } from '../types/personalSpace';

/**
 * GOOGLE DRIVE ROOT FOLDER ID
 * Configured via environment variable with fallback to 167KIQp6yGHnS1BVr0ta_wsy3fYEwiG_P
 */
export const GOOGLE_DRIVE_ROOT_FOLDER_ID =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GOOGLE_DRIVE_ROOT_FOLDER_ID) ||
  '167KIQp6yGHnS1BVr0ta_wsy3fYEwiG_P';

/**
 * Image optimization before upload:
 * - Max dimension: ~1600 x 1600
 * - Format: WebP (or JPEG fallback)
 * - Quality: 0.8
 */
export interface OptimizedImageData {
  blob: Blob;
  fileName: string;
  width: number;
  height: number;
  sizeBytes: number;
  previewUrl: string;
}

export const optimizePersonalPhoto = async (
  file: File,
  personId: string
): Promise<OptimizedImageData> => {
  return new Promise((resolve, reject) => {
    // Check file size limit (10 MB)
    if (file.size > 10 * 1024 * 1024) {
      return reject(new Error('File size exceeds the 10 MB limit. Please select a smaller photo.'));
    }

    // Check file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type.toLowerCase())) {
      return reject(new Error('Invalid file format. Only JPG, PNG, and WebP images are allowed.'));
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };

    reader.onerror = () => {
      reject(new Error('Failed to read image file.'));
    };

    img.onload = () => {
      const maxDim = 1600;
      let width = img.width;
      let height = img.height;

      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return reject(new Error('Failed to create canvas context for image optimization.'));
      }

      // Draw and scale image
      ctx.drawImage(img, 0, 0, width, height);

      // Convert to WebP format with quality 0.8
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            return reject(new Error('Image compression failed.'));
          }

          // Generate safe filename: ABH-P7X29_20261006_103522.webp
          const now = new Date();
          const dateStr = now.toISOString().replace(/[-:T.]/g, '').substring(0, 14);
          const sanitizedPersonId = personId.replace(/[^a-zA-Z0-9-]/g, '');
          const fileName = `${sanitizedPersonId}_${dateStr}.webp`;
          const previewUrl = URL.createObjectURL(blob);

          resolve({
            blob,
            fileName,
            width,
            height,
            sizeBytes: blob.size,
            previewUrl
          });
        },
        'image/webp',
        0.8
      );
    };

    img.onerror = () => {
      reject(new Error('Failed to load image for processing.'));
    };

    reader.readAsDataURL(file);
  });
};

/**
 * Convert Blob to Base64 string
 */
export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const res = reader.result as string;
      const base64 = res.split(',')[1] || '';
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

/**
 * SERVER API / NETLIFY FUNCTION DRIVE CLIENT
 * Dispatches authorized requests to server backend for Google Drive uploads & operations.
 * Credentials remain server-side.
 */
export const uploadPhotoToDriveAPI = async (
  optimizedData: OptimizedImageData,
  personId: string,
  personToken: string,
  caption: string
): Promise<PersonalPhoto> => {
  const base64Data = await blobToBase64(optimizedData.blob);

  // Call Netlify Function / API endpoint
  const response = await fetch('/.netlify/functions/drive-photos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${personToken}`,
      'X-Person-Token': personToken
    },
    body: JSON.stringify({
      personId,
      personToken,
      fileName: optimizedData.fileName,
      caption,
      fileBase64: base64Data,
      mimeType: 'image/webp'
    })
  });

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('403 Forbidden: You are not authorized to upload photos for this person.');
    }
    if (response.status === 401) {
      throw new Error('401 Unauthorized: Invalid access token.');
    }
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error || errData.message || `Google Drive upload failed with status ${response.status}`);
  }

  const result = await response.json();
  if (!result.success || !result.photo) {
    throw new Error(result.error || 'Google Drive upload failed to return photo metadata.');
  }

  return result.photo;
};

/**
 * SERVER API / NETLIFY FUNCTION DRIVE DELETE
 */
export const deletePhotoFromDriveAPI = async (
  photoId: string,
  personId: string,
  personToken: string,
  driveFileId: string
): Promise<boolean> => {
  const response = await fetch('/.netlify/functions/drive-photos', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${personToken}`,
      'X-Person-Token': personToken
    },
    body: JSON.stringify({
      photoId,
      personId,
      personToken,
      driveFileId
    })
  });

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('403 Forbidden: You cannot delete another person\'s photo.');
    }
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.message || 'Failed to delete photo.');
  }

  return true;
};
