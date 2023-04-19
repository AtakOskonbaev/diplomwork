// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1jz7Bb_l8hrF4WR-0yP1pZkJKYLDbHx0",
  authDomain: "diplomwork-8d546.firebaseapp.com",
  projectId: "diplomwork-8d546",
  storageBucket: "diplomwork-8d546.appspot.com",
  messagingSenderId: "1021219130334",
  appId: "1:1021219130334:web:b9f14cd0fb321220ce2b4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const categoryCollection = collection(db, "categories");
export const productsCollection = collection(db, "products");
export const ordersCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const signIn = () => signInWithPopup(auth, provider);
export const signOut = () => signOut();