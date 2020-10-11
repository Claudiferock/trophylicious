import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebse/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD85iwEO2_6eH0-ErZhAdsHgqISlq9KQis",
  authDomain: "trophylicous.firebaseapp.com",
  databaseURL: "https://trophylicous.firebaseio.com",
  projectId: "trophylicous",
  storageBucket: "trophylicous.appspot.com",
  messagingSenderId: "152859618957",
  appId: "1:152859618957:web:7e3a7bffcba1a5440bbcc4",
  measurementId: "G-FPE5PEYJWD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firestore = firebase.firestore();
export const auth = firebase.auth();

//authorization provider
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOutWithGoogle = () => auth.signOut();

window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the place in the db where a user profile might be.
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch the document from that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    // the collection we use is users and the doc will be the uid
    return firestore.collection('users').doc(uid);
    //GONE .get();
    //GONE return { uid, ...userDocument.data() };
  } catch (error) {
    console.error('Error fetching user', error.message);
    
  }
}

export default firebase;