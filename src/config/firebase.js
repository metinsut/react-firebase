import firebase from "firebase";
import "firebase/firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA00ru8sw0ucP8rcSHB_8v27cMXg71ZuTk",
    authDomain: "firestore-react.firebaseapp.com",
    databaseURL: "https://firestore-react.firebaseio.com",
    projectId: "firestore-react",
    storageBucket: "firestore-react.appspot.com",
    messagingSenderId: "115453511856"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase();