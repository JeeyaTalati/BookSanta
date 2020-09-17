import firebase from 'firebase';
require ('@firebase/firestore') 
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFneoVYV2w5fMiT0R-JknBDCXJn3izY8U",
    authDomain: "booksanta-6045d.firebaseapp.com",
    databaseURL: "https://booksanta-6045d.firebaseio.com",
    projectId: "booksanta-6045d",
    storageBucket: "booksanta-6045d.appspot.com",
    messagingSenderId: "281079439074",
    appId: "1:281079439074:web:efc29856b1b7a1f20948bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()