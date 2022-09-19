// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUyRdPGbUvIFw52IGKRZ6hNXmaapgKs50",
  authDomain: "project-goose-92ab2.firebaseapp.com",
  projectId: "project-goose-92ab2",
  storageBucket: "project-goose-92ab2.appspot.com",
  messagingSenderId: "27247665519",
  appId: "1:27247665519:web:886376489644194973089a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);
setActiveScreen("loginPage");
// setActiveScreen("registerPage");
// setActiveScreen("chatPage");
// setActiveScreen("resetPasswordPage");
