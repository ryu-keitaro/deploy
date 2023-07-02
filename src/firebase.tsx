// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs_OtpT-SRpgG14KVpfJgze7IebrPfK4c",
  authDomain: "monodeza1-ryukeitaro.firebaseapp.com",
  projectId: "monodeza1-ryukeitaro",
  storageBucket: "monodeza1-ryukeitaro.appspot.com",
  messagingSenderId: "46708738561",
  appId: "1:46708738561:web:9e1f187517fac6d6554e00",
  measurementId: "G-82L64NMR20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let analytics;

if (typeof window !== "undefined") {
  // クライアントサイドのみで実行されるコード
  analytics = getAnalytics(app);
}

export default db;