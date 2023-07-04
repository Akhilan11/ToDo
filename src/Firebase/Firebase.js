import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBYNnIKN_Ve6qzqlEP2beZuwXYWen2q7-M",
  authDomain: "todomaster-7b45a.firebaseapp.com",
  projectId: "todomaster-7b45a",
  storageBucket: "todomaster-7b45a.appspot.com",
  messagingSenderId: "832765217569",
  appId: "1:832765217569:web:b398688165003505bb4c60",
  measurementId: "G-K92Z8HS9VS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
