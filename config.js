import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD0N1hliP3DvFoKfZRp8OyNh4meAIx20B4",
  authDomain: "barter-system-dc750.firebaseapp.com",
  databaseURL: "https://barter-system-dc750.firebaseio.com",
  projectId: "barter-system-dc750",
  storageBucket: "barter-system-dc750.appspot.com",
  messagingSenderId: "601258174137",
  appId: "1:601258174137:web:d626155e1bf76655709d68"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
