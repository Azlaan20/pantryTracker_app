// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgRcp2tShVPuAaO4t-BQ-jCjFoj1Jdl74",
  authDomain: "inventory-management-59738.firebaseapp.com",
  projectId: "inventory-management-59738",
  storageBucket: "inventory-management-59738.appspot.com",
  messagingSenderId: "1096655244136",
  appId: "1:1096655244136:web:ada9c9906abf76561a64dd",
  measurementId: "G-XWHSLEJS6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {firestore}