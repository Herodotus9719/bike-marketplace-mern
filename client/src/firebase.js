// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bike-marketplace-mern.firebaseapp.com",
  projectId: "bike-marketplace-mern",
  storageBucket: "bike-marketplace-mern.appspot.com",
  messagingSenderId: "348490058606",
  appId: "1:348490058606:web:cf1fc3b962628cacc80f7f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
