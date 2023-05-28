// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { addUser } from "./firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// REPLACE THE FOLLOWING CONFIGURATIONS WITH YOUR FIREBASE INFORMATION (DO NOT DELETE QUOTATIONS)
const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID",
  appId: "YOUR APP ID",
  measurementId: "YOUR MEASUREMENT ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();
export let curr_usr = auth.currentUser;

// SIGNUP USER & LOG THEM IN
export function signup(username: string, email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Add username to Database
      const user = userCredential.user;
      updateProfile(user, {
        displayName: username,
      });
      console.log("User signed in", userCredential.user);
      addUser(user, username);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// LOGIN USER
export function login(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // update Profile with username
      const user = userCredential.user;
      console.log("login() User signed in", userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Invalid login information. Please try again");
    });
}

// LOGOUT USER
export function logout() {
  signOut(auth)
    .then(() => {
      console.log("user signed out");
    })
    .catch((error) => {
      // An error happened.
      console.log(error.message);
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    curr_usr = auth.currentUser;
    console.log("AuthState()", curr_usr);
  } else {
    // User is signed out
    curr_usr = auth.currentUser;
    console.log("AuthState()", curr_usr);
  }
});

// test@gmail.com Abcd1234!
