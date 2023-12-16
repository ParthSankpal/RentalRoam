// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rental-roam.firebaseapp.com",
  projectId: "rental-roam",
  storageBucket: "rental-roam.appspot.com",
  messagingSenderId: "833961435321",
  appId: "1:833961435321:web:b4b817e6afc1949bcbfb68",
  measurementId: "G-WQK8XMCCVN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
