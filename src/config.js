import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBcCPh6iMadLFqCWSawKfhy9c0i3I9EIHY",
    authDomain: "hackerme-54af0.firebaseapp.com",
    projectId: "hackerme-54af0",
    storageBucket: "hackerme-54af0.appspot.com",
    messagingSenderId: "1021466819281",
    appId: "1:1021466819281:web:457c00a3e70362fc1f63f0",
    measurementId: "G-9ER3WEJVX4"
});

export default firebaseConfig;