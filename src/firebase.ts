// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmBNy3HtODv0_d7Xx8IhsG5wCG7ctpoX8",
  authDomain: "project1-a152d.firebaseapp.com",
  projectId: "project1-a152d",
  storageBucket: "project1-a152d.appspot.com",
  messagingSenderId: "1039927433634",
  appId: "1:1039927433634:web:dda54888332b047f787afb",
  measurementId: "G-F39FKWE4YZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default App;
