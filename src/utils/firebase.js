// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoZiqAs6aO4c4Vz7PH6_fva7hDceU3sig",
  authDomain: "mygptproject-a78e6.firebaseapp.com",
  projectId: "mygptproject-a78e6",
  storageBucket: "mygptproject-a78e6.appspot.com",
  messagingSenderId: "604011616810",
  appId: "1:604011616810:web:d108084cde8aa361cac153",
  measurementId: "G-QNCK0Y7FDW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
