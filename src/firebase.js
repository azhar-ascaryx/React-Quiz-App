import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB_G0ZgNfljaRdWB0d8TsMSLkDLgBC6v5o",
  authDomain: "quiz-app-46146.firebaseapp.com",
  projectId: "quiz-app-46146",
  storageBucket: "quiz-app-46146.appspot.com",
  messagingSenderId: "755270493636",
  appId: "1:755270493636:web:feb8563c2d702435353091",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
