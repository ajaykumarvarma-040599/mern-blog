// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8238b.firebaseapp.com",
  projectId: "mern-blog-8238b",
  storageBucket: "mern-blog-8238b.appspot.com",
  messagingSenderId: "822206169249",
  appId: "1:822206169249:web:767c44292e0e656eaff0e0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
