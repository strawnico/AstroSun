import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apiKey = import.meta.env.VITE_apikeyAstroSun;

const firebaseConfig = {
  apiKey,
  authDomain: "astrosun-1d941.firebaseapp.com",
  projectId: "astrosun-1d941",
  storageBucket: "astrosun-1d941.appspot.com",
  messagingSenderId: "1001718863671",
  appId: "1:1001718863671:web:0d9ccb691cc260e56aecb2",
  measurementId: "G-1G4TZKBP4N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};
