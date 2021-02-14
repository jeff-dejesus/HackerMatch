import firebase from "firebase/app"
import "firebase/auth"

//where we have authentication to connect to firebase
const app = firebase.initializeApp({
  apiKey: "AIzaSyA5FykG90fqYYtuIixgzrgziCA-fatiHgg",
  authDomain: "celtic-artwork-296608.firebaseapp.com",
  projectId: "celtic-artwork-296608",
  storageBucket: "celtic-artwork-296608.appspot.com",
  messagingSenderId: "156152026820",
  appId: "1:156152026820:web:ffcf741d35492e0d99db91",
  measurementId: "G-5X41MLCHN9"
})

export const auth = app.auth()
export default app
