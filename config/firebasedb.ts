// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTFGpKS_SKlVJfYk0KWvXwxblwo_2m3mQ",
  authDomain: "todoapprafay.firebaseapp.com",
  projectId: "todoapprafay",
  storageBucket: "todoapprafay.appspot.com",
  messagingSenderId: "138331169210",
  appId: "1:138331169210:web:af14df1b38216abc593d83",
  measurementId: "G-RNKJ51JLLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore (app);
const auth = getAuth(app);
// const storage = getStorage(app);
export {db,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}
