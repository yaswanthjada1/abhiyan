import React, { useState } from 'react';
import { Upload, X, CheckCircle2, AlertCircle, Image as ImageIcon, Loader2, RefreshCw } from 'lucide-react';
import { compressImage, formatBytes, CompressionResult } from '../utils/imageCompressor';
import { uploadScreenshotResumable } from '../firebase/services';
import { ScreenshotMetadata } from '../types/project';

interface ScreenshotUploadModalProps {
  teamId: string;
  projectId: string;
  defaultDay?: number;
  onUploadComplete: (metadata: ScreenshotMetadata) => void;
  onClose: () => void;
}

export const ScreenshotUploadModal: React.FC<ScreenshotUploadModalProps> = ({
  teamId,
  projectId,
  defaultDay = 1,
  onUploadComplete,
  onClose,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [localPreviewUrl, setLocalPreviewUrl] = useState<string | null>(null);
  const [compressionResult, setCompressionResult] = useState<CompressionResult | null>(null);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [day, setDay] = useState<number>(defaultDay);
  const [caption, setCaption] = useState<string>('');
  const [uploaderName, setUploaderName] = useState<string>('');

  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [progressPct, setProgressPct] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. Validation: File Type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const hasValidExt = /\.(jpg|jpeg|png|webp)$/i.test(file.name);
    if (!validTypes.includes(file.type.toLowerCase()) && !hasValidExt) {
      setErrorMessage('Invalid file format. Please upload JPG, PNG, or WebP images.');
      return;
    }

    // 2. Validation: File Size (15MB max limit before compression)
    if (file.size > 15 * 1024 * 1024) {
      setErrorMessage(`File size (${formatBytes(file.size)}) exceeds the 15MB limit. Please choose a smaller image.`);
      return;
    }

    // 3. Immediate Local Preview
    const previewUrl = URL.createObjectURL(file);
    setSelectedFile(file);
    setLocalPreviewUrl(previewUrl);
    setErrorMessage('');
    setIsCompressing(true);

    // 4. Background Compression
    try {
      const result = await compressImage(file, 1600, 1600, 0.80);
      setCompressionResult(result);
    } catch (err) {
      console.warn('Image compression fallback:', err);
      setCompressionResult({
        file,
        originalSize: file.size,
        compressedSize: file.size,
        previewUrl,
        width: 0,
        height: 0,
        format: file.type || 'image/jpeg',
      });
    } finally {
      setIsCompressing(false);
    }
  };

  const handleStartUpload = async () => {
    const fileToUpload = compressionResult?.file || selectedFile;
    if (!fileToUpload || uploadState === 'uploading') return;

    setUploadState('uploading');
    setProgressPct(0);
    setErrorMessage('');

    try {
      const metadata = await uploadScreenshotResumable(
        teamId,
        projectId,
        day,
        fileToUpload,
        caption.trim() || `Day ${day} Progress Evidence`,
        uploaderName.trim() || 'Team Member',
        (pct) => setProgressPct(pct)
      );

      setUploadState('success');
      setTimeout(() => {
        onUploadComplete(metadata);
        onClose();
      }, 1000);
    } catch (err: any) {
      setUploadState('error');
      setErrorMessage(err.message || 'Upload failed. Please check network connection and try again.');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '520px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1rem 1.25rem',
            borderBottom: '1px solid var(--border-color)',
            background: 'var(--bg-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Upload size={20} color="var(--primary)" />
            <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>
              Upload Task Screenshot / Evidence
            </h3>
          </div>
          <button
            onClick={onClose}
            disabled={uploadState === 'uploading'}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: uploadState === 'uploading' ? 'not-allowed' : 'pointer',
              padding: '0.2rem',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {errorMessage && !selectedFile && (
            <div
              style={{
                padding: '0.75rem',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid #ef4444',
                borderRadius: 'var(--radius-sm)',
                color: '#ef4444',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          {!selectedFile ? (
            <label
              style={{
                border: '2px dashed var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '2.25rem 1rem',
                textAlign: 'center',
                cursor: 'pointer',
                background: 'var(--bg-subtle)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'border-color 0.2s ease',
              }}
            >
              <ImageIcon size={44} color="var(--primary)" />
              <div>
                <p style={{ margin: '0 0 0.25rem 0', fontWeight: 600, fontSize: '0.95rem' }}>
                  Click to select screenshot or photo
                </p>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Supports JPG, PNG, WebP (Max 15MB). Auto-compressed for optimal performance.
                </p>
              </div>
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </label>
          ) : (
            <>
              {/* Image Preview & Compression Stats */}
              <div
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <img
                  src={compressionResult?.previewUrl || localPreviewUrl || ''}
                  alt="Screenshot Preview"
                  style={{
                    width: '85px',
                    height: '85px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                  }}
                />
                <div style={{ flex: 1, fontSize: '0.825rem' }}>
                  <div style={{ fontWeight: 600, wordBreak: 'break-all' }}>
                    {selectedFile.name}
                  </div>

                  {isCompressing ? (
                    <div style={{ color: 'var(--text-muted)', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Loader2 size={12} className="spin" /> Optimizing image quality...
                    </div>
                  ) : compressionResult ? (
                    <div style={{ color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Size:{' '}
                      <span style={{ textDecoration: 'line-through' }}>
                        {formatBytes(compressionResult.originalSize)}
                      </span>{' '}
                      →{' '}
                      <strong style={{ color: 'var(--success)' }}>
                        {formatBytes(compressionResult.compressedSize)}
                      </strong>
                    </div>
                  ) : (
                    <div style={{ color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Size: {formatBytes(selectedFile.size)}
                    </div>
                  )}

                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.1rem' }}>
                    Format: {selectedFile.type.replace('image/', '').toUpperCase() || 'IMAGE'}
                  </div>
                </div>

                {uploadState !== 'uploading' && (
                  <button
                    onClick={() => {
                      setSelectedFile(null);
                      setLocalPreviewUrl(null);
                      setCompressionResult(null);
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    Change
                  </button>
                )}
              </div>

              {/* Day & Uploader Inputs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Target Day *
                  </label>
                  <select
                    value={day}
                    onChange={(e) => setDay(Number(e.target.value))}
                    disabled={uploadState === 'uploading'}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-subtle)',
                      color: 'var(--text-color)',
                    }}
                  >
                    <option value={1}>Day 1 — SETUP</option>
                    <option value={2}>Day 2 — AI VIBE CODE</option>
                    <option value={3}>Day 3 — CUSTOMISE</option>
                    <option value={4}>Day 4 — DOCUMENT</option>
                    <option value={5}>Day 5 — DEMO</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Uploader Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Student / Team Leader"
                    value={uploaderName}
                    onChange={(e) => setUploaderName(e.target.value)}
                    disabled={uploadState === 'uploading'}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-subtle)',
                      color: 'var(--text-color)',
                    }}
                  />
                </div>
              </div>

              {/* Caption Input */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Caption / Evidence Description
                </label>
                <input
                  type="text"
                  placeholder="e.g. Day 2 Working UI & Gauss Elimination Output"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  disabled={uploadState === 'uploading'}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-subtle)',
                    color: 'var(--text-color)',
                  }}
                />
              </div>

              {/* Upload Progress Bar */}
              {uploadState === 'uploading' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600 }}>
                    <span>Uploading screenshot to Storage...</span>
                    <span>{progressPct}%</span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: '8px',
                      background: 'var(--bg-subtle)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: `${progressPct}%`,
                        height: '100%',
                        background: 'var(--primary)',
                        transition: 'width 0.2s ease',
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Success Message */}
              {uploadState === 'success' && (
                <div
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid var(--success)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--success)',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={18} />
                  <span>Upload complete ✓ Screenshot saved to workspace.</span>
                </div>
              )}

              {/* Error Message & Retry */}
              {uploadState === 'error' && (
                <div
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid #ef4444',
                    borderRadius: 'var(--radius-sm)',
                    color: '#ef4444',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>{errorMessage}</span>
                  </div>
                  <button
                    onClick={handleStartUpload}
                    style={{
                      background: '#ef4444',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.35rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      flexShrink: 0,
                    }}
                  >
                    <RefreshCw size={12} /> Retry
                  </button>
                </div>
              )}

              {/* Modal Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '0.75rem',
                  marginTop: '0.5rem',
                }}
              >
                <button
                  onClick={onClose}
                  disabled={uploadState === 'uploading'}
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleStartUpload}
                  disabled={uploadState === 'uploading' || uploadState === 'success'}
                  className="btn btn-primary"
                  style={{
                    padding: '0.5rem 1.25rem',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: uploadState === 'uploading' ? 'not-allowed' : 'pointer',
                    opacity: uploadState === 'uploading' ? 0.7 : 1,
                  }}
                >
                  {uploadState === 'uploading' ? (
                    <>
                      <Loader2 size={16} className="spin" /> Uploading ({progressPct}%)
                    </>
                  ) : (
                    <>
                      <Upload size={16} /> Upload Screenshot
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
