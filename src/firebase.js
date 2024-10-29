// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyABeKCAZymTw6FnOw_ewwpx8OuNeoLFSeI",
  authDomain: "web-kelazz.firebaseapp.com",
  projectId: "web-kelazz",
  storageBucket: "web-kelazz.appspot.com",
  messagingSenderId: "550040447360", 
  appId: "1:550040447360:web:493ceae34d398131473965"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();