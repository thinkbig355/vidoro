import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export const saveUserToFirestore = async (user: any) => {
  try {
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      createdAt: new Date().toISOString(),
      // Add more fields like credits later
    }, { merge: true });
  } catch (error) {
    console.error('Error saving user to Firestore:', error);
  }
};