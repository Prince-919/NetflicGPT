// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSysa-k_eZJgjhLApoh8utWHdjh9NS3C4",
  authDomain: "netflix-9fd9a.firebaseapp.com",
  projectId: "netflix-9fd9a",
  storageBucket: "netflix-9fd9a.appspot.com",
  messagingSenderId: "358294439710",
  appId: "1:358294439710:web:2c1c33a2581797f3286b0f",
  measurementId: "G-0K9PZDZJ54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
