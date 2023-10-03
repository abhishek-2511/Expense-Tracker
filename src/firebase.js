// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3DZvd8gbV97e0TFcOQsNHJI_ZKlOsOv0",
  authDomain: "expense-tracker-8cf59.firebaseapp.com",
  projectId: "expense-tracker-8cf59",
  storageBucket: "expense-tracker-8cf59.appspot.com",
  messagingSenderId: "446408687572",
  appId: "1:446408687572:web:018a6911a4d5101c8ea041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };