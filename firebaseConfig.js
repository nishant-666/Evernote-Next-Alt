import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAaLhtQ-B698GWyLNihGVRaNWBOKtBH8wU",
    authDomain: "evernoteclone-7682f.firebaseapp.com",
    projectId: "evernoteclone-7682f",
    storageBucket: "evernoteclone-7682f.appspot.com",
    messagingSenderId: "332984082327",
    appId: "1:332984082327:web:ae2776c3a56f4d98816ed2"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);