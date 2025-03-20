import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const saveUserToFirestore = async (user: any) => {
  try {
    const userRef = doc(db, 'users', user.uid);
    
    // Check if the user document already exists
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      // New user: Set all fields including credits
      await setDoc(
        userRef,
        {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || user.email.split('@')[0],
          createdAt: new Date().toISOString(),
          credits: 0, // Default credits for new users (you can change this value)
        },
        { merge: true }
      );
    } else {
      // Existing user: Update fields except credits
      await setDoc(
        userRef,
        {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || user.email.split('@')[0],
          createdAt: userDoc.data().createdAt, // Preserve the original createdAt
        },
        { merge: true }
      );
    }
  } catch (error) {
    console.error('Error saving user to Firestore:', error);
  }
};