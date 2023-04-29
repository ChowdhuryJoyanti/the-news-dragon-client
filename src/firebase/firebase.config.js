// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqKyLtmswnl5GhDnkwTK7ctydg1ae8PPc",
  authDomain: "the-news-dragon-f07c5.firebaseapp.com",
  projectId: "the-news-dragon-f07c5",
  storageBucket: "the-news-dragon-f07c5.appspot.com",
  messagingSenderId: "1092636540587",
  appId: "1:1092636540587:web:9bcfcfb83929dedd7841ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;