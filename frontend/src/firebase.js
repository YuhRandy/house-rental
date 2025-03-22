// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4OLdf6rDI1KUezJKpQAfz-vXZlaIr7-I",
  authDomain: "house-rental-b20da.firebaseapp.com",
  projectId: "house-rental-b20da",
  storageBucket: "house-rental-b20da.firebasestorage.app",
  messagingSenderId: "243098974333",
  appId: "1:243098974333:web:ce201deb2e88b67b841914",
  measurementId: "G-NS08VEYQQT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
