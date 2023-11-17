import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAicZ20KRKRKXLClUl8UDP0t9qwXFVyA1E",
  authDomain: "joddev-349ae.firebaseapp.com",
  projectId: "joddev-349ae",
  storageBucket: "joddev-349ae.appspot.com",
  messagingSenderId: "79222190433",
  appId: "1:79222190433:web:ec41904e5586012d7e5520",
  measurementId: "G-FHK0CTHDDL"
};

initializeApp(firebaseConfig);
 

const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
}

// const analytics = getAnalytics(FirebaseConfig);