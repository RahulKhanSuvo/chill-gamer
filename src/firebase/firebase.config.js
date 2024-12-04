// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ZDgTaDIwKVbGJcOABYs8UmgXkCx4SDQ",
  authDomain: "chill-gamer-e0d34.firebaseapp.com",
  projectId: "chill-gamer-e0d34",
  storageBucket: "chill-gamer-e0d34.firebasestorage.app",
  messagingSenderId: "999379209852",
  appId: "1:999379209852:web:83811369f7d0d02e0143f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
