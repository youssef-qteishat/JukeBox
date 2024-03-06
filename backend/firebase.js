// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC15Ks9PTmXvpX1UdNOxdKYUkkPPxOLbcI",
  authDomain: "jukebox-92b0b.firebaseapp.com",
  projectId: "jukebox-92b0b",
  storageBucket: "jukebox-92b0b.appspot.com",
  messagingSenderId: "550609089178",
  appId: "1:550609089178:web:9042e10e81d8050cf06523",
  measurementId: "G-9R69GEBVG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);