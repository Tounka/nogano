
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Agrega esta línea
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvNS1_T04GHDd_ZqvmeVL8PdhrrMrT2ac",
  authDomain: "nogano-df4ba.firebaseapp.com",
  projectId: "nogano-df4ba",
  storageBucket: "nogano-df4ba.appspot.com",
  messagingSenderId: "323184895457",
  appId: "1:323184895457:web:6b86e5176738ab6adf1ea0",
  measurementId: "G-YRC2J85D8W"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb);


