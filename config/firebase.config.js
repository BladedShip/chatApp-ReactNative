// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey:"AIzaSyDfHImEQyV-QzULSdYLOTVm1UszyugD8Bc",
  authDomain:"chatlikeshit.firebaseapp.com",
  projectId:"chatlikeshit",
  storageBucket:"chatlikeshit.appspot.com",
  messagingSenderId:"1073799215432",
  appId:"1:1073799215432:web:56e2c979c92e4fbebddb7d",
  measurementId:"G-Z01V2G490P"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth =getAuth();
export const database = getFirestore();