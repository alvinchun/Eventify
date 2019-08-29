import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7lnHs-2fTaPnXP_cpgHhZzzxegOMsBwQ",
  authDomain: "eventify-247223.firebaseapp.com",
  databaseURL: "https://eventify-247223.firebaseio.com",
  projectId: "eventify-247223",
  storageBucket: "",
  messagingSenderId: "520705394",
  appId: "1:520705394:web:2858208acc98b127"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
