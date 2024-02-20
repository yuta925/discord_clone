import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBLL5tdcvtJ4PrA66JuQXMGZS1beR7Uss",
  authDomain: "discord-clone-udemy-19682.firebaseapp.com",
  projectId: "discord-clone-udemy-19682",
  storageBucket: "discord-clone-udemy-19682.appspot.com",
  messagingSenderId: "1028151134997",
  appId: "1:1028151134997:web:8bb0b459220be42d68f71c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
