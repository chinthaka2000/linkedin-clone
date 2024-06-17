import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDplMkxbRQmXTLDoTB-JsqO2-A0byg-_ko",
  authDomain: "linkedin-b617d.firebaseapp.com",
  projectId: "linkedin-b617d",
  storageBucket: "linkedin-b617d.appspot.com",
  messagingSenderId: "136654090149",
  appId: "1:136654090149:web:f90a98a57b489d102a424c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };


