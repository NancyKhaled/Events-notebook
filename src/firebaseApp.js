import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDF4D2BUbyF8-K1rKNQul8JhnkaU6GzvCY",
  authDomain: "notebook-2d6b4.firebaseapp.com",
  projectId: "notebook-2d6b4",
  storageBucket: "notebook-2d6b4.appspot.com",
  messagingSenderId: "451142765761",
  appId: "1:451142765761:web:7d5e0fe860fb1269955840",
  measurementId: "G-G8L7MSEPH6",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
// Events Ref
export const eventsRef = firebaseApp.database().ref().child("events");
