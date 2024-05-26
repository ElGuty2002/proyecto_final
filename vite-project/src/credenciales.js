import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDdnUxxoRoIBihLK2j-GG16xTHoMgLUbE",
  authDomain: "login-287ad.firebaseapp.com",
  projectId: "login-287ad",
  storageBucket: "login-287ad.appspot.com",
  messagingSenderId: "317300771326",
  appId: "1:317300771326:web:960ba80763c51198a198af"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);
const auth = getAuth(appFirebase);

export { appFirebase, db, auth };
