// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIO4D_LSd_Pyt7Vqay1_QGqGlJrzNuCAQ",
  authDomain: "realtor-clone-e6999.firebaseapp.com",
  projectId: "realtor-clone-e6999",
  storageBucket: "realtor-clone-e6999.appspot.com",
  messagingSenderId: "627488411867",
  appId: "1:627488411867:web:322d74dccf9afb1d21bcfe"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();