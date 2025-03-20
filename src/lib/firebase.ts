import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration (keep your values)
const firebaseConfig = {
  apiKey: "AIzaSyDEnJ0LRbMAG0KTvdYYgOnwJ2L01lLIm2s",
  authDomain: "vidoro-app.firebaseapp.com",
  projectId: "vidoro-app",
  storageBucket: "vidoro-app.firebasestorage.app",
  messagingSenderId: "157434132554",
  appId: "1:157434132554:web:3357616087dc1f32338eb3",
  measurementId: "G-CRQN8YJ5TV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const analytics = getAnalytics(app);