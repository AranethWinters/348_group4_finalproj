// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfEM-ESkuvsyFFwRGYV_Rms-7l2GpQ610",
  authDomain: "final-website-database.firebaseapp.com",
  databaseURL: "https://final-website-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "final-website-database",
  storageBucket: "final-website-database.firebasestorage.app",
  messagingSenderId: "88916667806",
  appId: "1:88916667806:web:ababad41aecdb46107ba8f",
  measurementId: "G-5GH5KZV5JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);