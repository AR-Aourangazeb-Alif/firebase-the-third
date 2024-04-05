// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOeUv4Qg7dfl5tjCpq_iJzyQRU-F6JufI",
  authDomain: "fir-the-third.firebaseapp.com",
  projectId: "fir-the-third",
  storageBucket: "fir-the-third.appspot.com",
  messagingSenderId: "370918913694",
  appId: "1:370918913694:web:fd1729d0c233189607ed8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;