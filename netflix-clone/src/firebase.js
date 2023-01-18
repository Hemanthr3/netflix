// Import the functions you need from the SDKs you need
import firebase from "firebase";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ7doVD9TrfDglwhr7RKU00neVN4wBp7I",
  authDomain: "netflix-clone-65e71.firebaseapp.com",
  projectId: "netflix-clone-65e71",
  storageBucket: "netflix-clone-65e71.appspot.com",
  messagingSenderId: "846145710942",
  appId: "1:846145710942:web:7cbc3e43b653e5cac07dcf"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export {auth};
export default db;


