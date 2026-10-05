export interface CompressionResult {
  file: File;
  originalSize: number;
  compressedSize: number;
  previewUrl: string;
  width: number;
  height: number;
  format: string;
}

/**
 * Resizes and compresses an image file before upload.
 * Max width: 1600px, Max height: 1600px, Quality: 0.80 (WebP preferred, fallback JPEG).
 */
export async function compressImage(
  file: File,
  maxWidth = 1600,
  maxHeight = 1600,
  quality = 0.80
): Promise<CompressionResult> {
  const originalSize = file.size;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions maintaining aspect ratio
        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get 2D canvas context for image compression'));
          return;
        }

        // Use high-quality image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Try WebP conversion first, fallback to JPEG
        const attemptCompress = (mimeType: string) => {
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                if (mimeType !== 'image/jpeg') {
                  attemptCompress('image/jpeg');
                } else {
                  reject(new Error('Failed to create compressed image blob'));
                }
                return;
              }

              const ext = mimeType === 'image/webp' ? 'webp' : 'jpg';
              const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
              const newFileName = `${nameWithoutExt}_compressed.${ext}`;

              const compressedFile = new File([blob], newFileName, {
                type: mimeType,
                lastModified: Date.now(),
              });

              const previewUrl = URL.createObjectURL(blob);

              resolve({
                file: compressedFile,
                originalSize,
                compressedSize: compressedFile.size,
                previewUrl,
                width,
                height,
                format: mimeType,
              });
            },
            mimeType,
            quality
          );
        };

        // Determine initial format (webp if supported, or jpeg)
        attemptCompress('image/webp');
      };

      img.onerror = (err) => reject(err);
    };

    reader.onerror = (err) => reject(err);
  });
}

/**
 * Format bytes to human readable format (KB, MB)
 */
export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
