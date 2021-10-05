import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
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


// Ham nay tao user neu khach hang dang nhap bang Google
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // Neu user chua dang nhap hoac khong tona tai thi ko lam gi
    if (!userAuth) return;

    // Khởi tạo và check xem user với cái UID đã log từ Google có tồn tại hay chưa
    // userAuth là cái đăng nhập từ google
    const docUserRef = doc(firestore,'users',`'${userAuth.uid}'`)
    const snapShot = await getDoc(docUserRef);

    // Nếu tồn tại thì không làm gì cả
    // Nếu không tồn tại thì bắt đầu thêm vào dữ liệu users
    if (snapShot.exists()) {
        // console.log("Document data:", snapShot.data());
    } else {
        // doc.data() will be undefined in this case
        // console.log("No such document!");
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(docUserRef, {
                displayName,
                email,
                createdAt,
                ...additionalData    
            }) 
        } catch(err) {
            console.log('error creating user', err.message)
        }

    }

    return docUserRef;
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);