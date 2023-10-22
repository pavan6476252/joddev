// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAicZ20KRKRKXLClUl8UDP0t9qwXFVyA1E",
  authDomain: "joddev-349ae.firebaseapp.com",
  projectId: "joddev-349ae",
  storageBucket: "joddev-349ae.appspot.com",
  messagingSenderId: "79222190433",
  appId: "1:79222190433:web:ec41904e5586012d7e5520",
  measurementId: "G-FHK0CTHDDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);