const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();
const express = require('express');
const app = express();


//basic hello world
//Get data @Request https://us-central1-hackerme-54af0.cloudfunctions.net/helloWorld
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});


const config = {
    apiKey: "AIzaSyBcCPh6iMadLFqCWSawKfhy9c0i3I9EIHY",
    authDomain: "hackerme-54af0.firebaseapp.com",
    projectId: "hackerme-54af0",
    storageBucket: "hackerme-54af0.appspot.com",
    messagingSenderId: "1021466819281",
    appId: "1:1021466819281:web:457c00a3e70362fc1f63f0",
    measurementId: "G-9ER3WEJVX4"
}
const firebase = require('firesebase');
firebase.initializeApp(config);


//basic get userProfile
//get userProfile @Request https://us-central1-hackerme-54af0.cloudfunctions.net/api/userProfile
app.get('/userProfile', (req, res) => {
    admin
        .firestore()
        .collection('userProfile')
        .get()
        .then((data) =>{
            let userProfile = [];
            data.forEach((doc) =>{
                userProfile.push(doc.data());
            });
            return res.json(userProfile);
        })
        .catch((err) => console.error(err));
});

/*
//signup route
app.post('/signup', (req, res) =>{
    const newUser = {
        email: req.body.email,
    }
})
*/

//express allows you to have a requrest that has api in the url https://baseurl.com/api/userProfile
exports.api = functions.https.onRequest(app);