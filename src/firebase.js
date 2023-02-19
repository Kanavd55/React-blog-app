import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDW0faiZvieQphsifXphP4ZC6Ndzo1l5pU",
    authDomain: "react-blog-183af.firebaseapp.com",
    projectId: "react-blog-183af",
    storageBucket: "react-blog-183af.appspot.com",
    messagingSenderId: "65056900111",
    appId: "1:65056900111:web:2347c013f93e5116660f7a"
  };

firebase.initializeApp(firebaseConfig);
export const firestore=firebase.firestore();