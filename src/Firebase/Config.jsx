// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlHBRVD56qGjybsDgaOBDrTqh-c8v3Tts",
  authDomain: "test-e01f8.firebaseapp.com",
  projectId: "test-e01f8",
  storageBucket: "test-e01f8.appspot.com",
  messagingSenderId: "538202963676",
  appId: "1:538202963676:web:bcfd00063e200807293e19",
  measurementId: "G-RN9WGR4LQW"
};

// Initialize Firebase

export const firebaseData = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
//  getFirestore(app)
