import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getAuth}from 'firebase/auth'


const config = {
  apiKey: "AIzaSyChZqc466kn8p8CIqTzE3pHr-SWiIrrrU4",
  authDomain: "honoursproject-336716.firebaseapp.com",
  databaseURL: "https://honoursproject-336716-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "honoursproject-336716",
  storageBucket: "honoursproject-336716.appspot.com",
  messagingSenderId: "381756380938",
  appId: "1:381756380938:web:488681905ff6d59c814cf3"
  }
  
  const app = initializeApp(config);
  export const db = getFirestore(app);

  export const auth = getAuth(app)
  export default app;