// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth to access auth object
import { getFirestore } from "firebase/firestore"; // Import getFirestore for Firestore


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSjgd-9uJP7RAYrdsrdSdYil_P3FUypqs",
  authDomain: "clone-cbca7.firebaseapp.com",
  projectId: "clone-cbca7",
  storageBucket: "clone-cbca7.appspot.com",
  messagingSenderId: "1043284524734",
  appId: "1:1043284524734:web:04126b267857456464a8ef",
  measurementId: "G-BJF9JF7YZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app); // Access auth object using getAuth function
const db = getFirestore(app); // Access Firestore object using getFirestore function

export { db, auth };