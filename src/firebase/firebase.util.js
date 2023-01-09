import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';


const config={
  apiKey: "AIzaSyCXU7Qx8OP9x8CfmojqFJ9BiqQpFZe3AzA",
  authDomain: "crown-db-f08e1.firebaseapp.com",
  projectId: "crown-db-f08e1",
  storageBucket: "crown-db-f08e1.appspot.com",
  messagingSenderId: "383208941934",
  appId: "1:383208941934:web:9f01b9b2ce5ab720d5397f",
  measurementId: "G-P04JB2SZ89"
};

firebase.initializeApp(config)

export const auth =firebase.auth();
export const  firestore= firebase.firestore()

const provider=new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'})

export const  signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase
