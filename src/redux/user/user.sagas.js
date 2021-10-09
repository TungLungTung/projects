import { takeLatest,put,all,call } from 'redux-saga/effects'

import UserActionTypes from './user.types'

import { googleSignInSuccess,googleSignInFailure, emailSignInSuccess, emailSignInFailure } from './user.actions';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signInWithPopup,signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc } from "firebase/firestore";


// Google Signin
export function* signInWithGoogle() {
    // Code tu API luon co the error nen phai catch
    try {
        const {user} = yield signInWithPopup(auth, googleProvider);
        const userRef = yield call(createUserProfileDocument,user);
        const userSnapshot = yield getDoc(userRef);
        // Thanh cong
        yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(googleSignInFailure(error))
    }
}
export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

// Email Sign-in
export function* signInWithEmail({payload: {email,password}}) {
    try {
        // Logic signin
        const {user} = yield signInWithEmailAndPassword(auth, email, password);
        const userRef = yield call(createUserProfileDocument,user);
        const userSnapshot = yield getDoc(userRef);
        // Thanh cong
        yield put(emailSignInSuccess({id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}


// Export Saga
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}