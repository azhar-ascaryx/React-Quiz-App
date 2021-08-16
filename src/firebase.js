import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC2jbfJGfponrOeS8u7L--bQiA00LZf5yU",
  authDomain: "quiz-app-3c0f2.firebaseapp.com",
  projectId: "quiz-app-3c0f2",
  storageBucket: "quiz-app-3c0f2.appspot.com",
  messagingSenderId: "189767294420",
  appId: "1:189767294420:web:5b3c33de5aa636899cca41",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
