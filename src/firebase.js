import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtpvXj87jBUme9Ds0aQtHc4K2bZSSJJK0",
    authDomain: "fir-chat-app-965ba.firebaseapp.com",
    projectId: "fir-chat-app-965ba",
    storageBucket: "fir-chat-app-965ba.appspot.com",
    messagingSenderId: "984948853157",
    appId: "1:984948853157:web:d9c1df06e2edb30d31404c"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
