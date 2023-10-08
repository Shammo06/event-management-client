// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBNco7tJa7hWj_jVG2AJ-_nVzvajATHYw",
  authDomain: "social-event-management-38107.firebaseapp.com",
  projectId: "social-event-management-38107",
  storageBucket: "social-event-management-38107.appspot.com",
  messagingSenderId: "607200119867",
  appId: "1:607200119867:web:cce0413e9e8c929566a01e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;