// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD75clzSNQ9Dy6PZwguRljQk-gTaDJaFx0",
  authDomain: "email-password-auth-9ee4f.firebaseapp.com",
  projectId: "email-password-auth-9ee4f",
  storageBucket: "email-password-auth-9ee4f.appspot.com",
  messagingSenderId: "541197801555",
  appId: "1:541197801555:web:0f2f0951f1d15dcf350ea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;