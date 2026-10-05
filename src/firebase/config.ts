import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDOT2jf3Y1cU-3hOQtu-jSsYcloIPP_G0g",
  authDomain: "abhiya-1a3ac.firebaseapp.com",
  projectId: "abhiya-1a3ac",
  storageBucket: "abhiya-1a3ac.firebasestorage.app",
  messagingSenderId: "1032747926046",
  appId: "1:1032747926046:web:2460b766f7c8469b07640f",
  measurementId: "G-NE30303ZRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
