// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW7SgiRW8mViHmZJbVUX2hUfqZdfdH_sk",
  authDomain: "workflow-55579.firebaseapp.com",
  projectId: "workflow-55579",
  storageBucket: "workflow-55579.appspot.com",
  messagingSenderId: "595628557227",
  appId: "1:595628557227:web:6a530e876179120827c8ee",
  measurementId: "G-VTYLQ4Z7L4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const googleAuthProvider = new GoogleAuthProvider();
