import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDzqcbhIw8zdnxXghiuZhu7ZdonkGHufGI",
    authDomain: "netflix-clone-y-8bda1.firebaseapp.com",
    projectId: "netflix-clone-y-8bda1",
    storageBucket: "netflix-clone-y-8bda1.appspot.com",
    messagingSenderId: "483820671709",
    appId: "1:483820671709:web:17a5c812322307b3440134"
  };
  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export{auth}
  export default db;