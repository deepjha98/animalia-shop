import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

/////////////////////////////////////////////////////////////
const config = {
  apiKey: "AIzaSyDslWaVSu2x-4TC2h3TswXOM31vqpDW98U",
  authDomain: "animalia-shop.firebaseapp.com",
  projectId: "animalia-shop",
  storageBucket: "animalia-shop.appspot.com",
  messagingSenderId: "507948522902",
  appId: "1:507948522902:web:e2a5bbb4770ec6c50f11b7",
  measurementId: "G-4GHBH5ZNCX",
};

/////////////////////////////////////////////////////////////
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
