function installApp() {
  alert("JVortex Dynamics App is installing!");
}
// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config (copy from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBjKbuuVy_NU9dTdiHhql0F8mHD5NIsI6k",
  authDomain: "admn-of-nexura-panel.firebaseapp.com",
  projectId: "admn-of-nexura-panel",
  storageBucket: "admn-of-nexura-panel.appspot.com",
  messagingSenderId: "34741499614",
  appId: "1:34741499614:web:5c5eb0fbc39384af16f44f",
  measurementId: "G-FHXSSC1PVL"
};

// Start Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);     // For text data (messages, services, customers)
const storage = getStorage(app);  // For images/videos
