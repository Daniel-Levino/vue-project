// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeL5qKYNZpY8rSk0Ikr0dzQcFFCDdOwW8",
  authDomain: "chat-cd00d.firebaseapp.com",
  projectId: "chat-cd00d",
  storageBucket: "chat-cd00d.appspot.com",
  messagingSenderId: "26813085330",
  appId: "1:26813085330:web:6f8a8d26c3060057af584b",
  databaseURL: "https://chat-cd00d-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth }

