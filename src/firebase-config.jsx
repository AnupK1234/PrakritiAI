
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyh0xnBpsinJjbFEH0ML97TWIW96p3Wkg",
  authDomain: "prakritai-chatbot.firebaseapp.com",
  projectId: "prakritai-chatbot",
  storageBucket: "prakritai-chatbot.appspot.com",
  messagingSenderId: "1038473433659",
  appId: "1:1038473433659:web:cc36fcdb469a3741eac21e",
  measurementId: "G-KNZ7QXWN8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)