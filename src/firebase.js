// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBq15OOxBAH6cVZun3e67W8Ct_QUn42M8I",
    authDomain: "chitchat-11f1e.firebaseapp.com",
    databaseURL: "https://chitchat-11f1e-default-rtdb.firebaseio.com",
    projectId: "chitchat-11f1e",
    storageBucket: "chitchat-11f1e.appspot.com",
    messagingSenderId: "354760089777",
    appId: "1:354760089777:web:2e6046b59ed4ed01c00290",
    measurementId: "G-PJ83N5CLTY"
});
const db = firebaseApp.firestore();
export default db;