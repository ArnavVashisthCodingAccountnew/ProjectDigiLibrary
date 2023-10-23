import firebase from 'firebase';

export const firebaseConfig = {

  apiKey: "AIzaSyDa5YuAH4Czc2LR3cHSrp47ZAAHSFQiSAo",

  authDomain: "digilibrary-fa3a4.firebaseapp.com",

  projectId: "digilibrary-fa3a4",

  storageBucket: "digilibrary-fa3a4.appspot.com",

  messagingSenderId: "387231899601",

  appId: "1:387231899601:web:b5b9a431bf7e068b634af0",

  measurementId: "G-7X0GE53DFH"

};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
