import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCirGP-yu4ZVcL58rRxDjhBzf2d3V0d5ow",
    authDomain: "shop-51e6e.firebaseapp.com",
    projectId: "shop-51e6e",
    storageBucket: "shop-51e6e.appspot.com",
    messagingSenderId: "155488725466",
    appId: "1:155488725466:web:aa389461488e988c3d78e3"
};
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);