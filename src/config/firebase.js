// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBZ7IDOP0Uwz0oYg3PrLIJQgqb_FC6gBJA",
    authDomain: "todo-e1b77.firebaseapp.com",
    databaseURL: "https://todo-e1b77.firebaseio.com",
    projectId: "todo-e1b77",
    storageBucket: "todo-e1b77.appspot.com",
    messagingSenderId: "695021225062",
    appId: "1:695021225062:web:4f360960c92cd5953b19a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;