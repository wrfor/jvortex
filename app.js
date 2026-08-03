function installApp() {
  alert("JVortex Dynamics App is installing!");
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjKbuuVy_NU9dTdiHhql0F8mHD5NIsI6k",
  authDomain: "admn-of-nexura-panel.firebaseapp.com",
  projectId: "admn-of-nexura-panel",
  storageBucket: "admn-of-nexura-panel.firebasestorage.app",
  messagingSenderId: "34741499614",
  appId: "1:34741499614:web:5c5eb0fbc39384af16f44f",
  measurementId: "G-FHXSSC1PVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
