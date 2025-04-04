// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8GixsHbVBbEC9SBnG3iQg4eLm_AVRpzk",
  authDomain: "e-commerce-21fa2.firebaseapp.com",
  projectId: "e-commerce-21fa2",
  storageBucket: "e-commerce-21fa2.firebasestorage.app",
  messagingSenderId: "1040380922357",
  appId: "1:1040380922357:web:755d25ef36d72b802238bc",
  measurementId: "G-MFC29XFBRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const googleProvider = new GoogleAuthProvider();
