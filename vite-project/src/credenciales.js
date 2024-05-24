// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDdnUxxoRoIBihLK2j-GG16xTHoMgLUbE",
  authDomain: "login-287ad.firebaseapp.com",
  projectId: "login-287ad",
  storageBucket: "login-287ad.appspot.com",
  messagingSenderId: "317300771326",
  appId: "1:317300771326:web:960ba80763c51198a198af"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;