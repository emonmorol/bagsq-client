// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.BAGSQ_apiKey,
  authDomain: process.env.BAGSQ_authDomain,
  projectId: process.env.BAGSQ_projectId,
  storageBucket: process.env.BAGSQ_storageBucket,
  messagingSenderId: process.env.BAGSQ_messagingSenderId,
  appId: process.env.BAGSQ_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
