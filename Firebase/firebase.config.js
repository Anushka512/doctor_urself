// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_apiKey,
  // authDomain: process.env.NEXT_PUBLIC_authDomain,
  // projectId: process.env.NEXT_PUBLIC_projectId,
  // storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  // messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  // appId: process.env.NEXT_PUBLIC_appId,
  apiKey: "AIzaSyDGhfrFZImmR5RI8TjpwULhYzi9fEzrns4",
  authDomain: "doctor-yourself.firebaseapp.com",
  projectId: "doctor-yourself",
  storageBucket: "doctor-yourself.appspot.com",
  messagingSenderId: "992274134735",
  appId: "1:992274134735:web:b092428208a7363942a9ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;