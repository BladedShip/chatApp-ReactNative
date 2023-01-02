// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB0x36DNONeWHaIL6FPZPwvlu8Osdx2Htc",
  authDomain: "chatapp-fc1a2.firebaseapp.com",
  projectId: "chatapp-fc1a2",
  storageBucket: "chatapp-fc1a2.appspot.com",
  messagingSenderId: "902608495963",
  appId: "1:902608495963:web:c167b535026ebc797f267e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();