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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user : ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// To add collections and items in the firebase
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  console.log("//////////////////////////", objectToAdd);
  return await batch.commit();
};

//
export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  // console.log(transformedCollection, "<<<<<<<<<<<<<<<<<<<<");
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
