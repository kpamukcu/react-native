// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";      //Firebase bunu vermez
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbcfz0ACcAdQZOW3SfvVcrQG4zjWYsb-4",
  authDomain: "kaan-84aad.firebaseapp.com",
  projectId: "kaan-84aad",
  storageBucket: "kaan-84aad.firebasestorage.app",
  messagingSenderId: "827140014386",
  appId: "1:827140014386:web:f02d301ce3e3a183d4172b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore'u oluştur  //Firebase bunu vermez
export const db = getFirestore(app);