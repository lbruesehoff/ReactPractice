import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAtp_L5OgOY1V2zRxSY9d-vAIUJKBlcYck",
    authDomain: "react-login-392a9.firebaseapp.com",
    projectId: "react-login-392a9",
    storageBucket: "react-login-392a9.appspot.com",
    messagingSenderId: "6304027049",
    appId: "1:6304027049:web:c065f0a23a1ecaa0dfb4b8",
    measurementId: "G-ZLNXH00WJ6"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);