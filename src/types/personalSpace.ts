export interface PersonIdentity {
  personId: string;       // e.g. ABH-P7X29
  referenceId: string;    // e.g. MMH-A1-X7K92
  teamId: string;         // e.g. team-A1-1740000000000
  name: string;
  rollNumber: string;
  email?: string;
  role: 'leader' | 'member';
  personToken: string;    // Private secure token (never shown publicly)
  createdAt?: any;
}

export interface PersonalPhoto {
  photoId: string;
  personId: string;       // Owner person ID (e.g. ABH-P7X29)
  driveFileId: string;    // Google Drive File ID
  driveFolderId?: string; // Student Google Drive folder ID
  rootFolderId?: string;  // Root ABHYAN Google Drive folder ID
  fileName: string;       // e.g. ABH-P7X29_20261006_103522.webp
  caption: string;        // Optional note/caption
  viewUrl: string;        // Secure view URL/stream
  uploadedAt: string;     // ISO String or formatted date
  fileSizeBytes?: number;
}

export interface PersonalNote {
  noteId: string;
  personId: string;       // Owner person ID (e.g. ABH-P7X29)
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
