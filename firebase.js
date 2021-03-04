import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlkXEddnFAXOzSU8282cKVHdFrwPdjJ_I",
  authDomain: "chat-c4f47.firebaseapp.com",
  projectId: "chat-c4f47",
  storageBucket: "chat-c4f47.appspot.com",
  messagingSenderId: "17604649116",
  appId: "1:17604649116:web:77f57b547e6144b5150d59",
  measurementId: "G-N71J9X76GF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;