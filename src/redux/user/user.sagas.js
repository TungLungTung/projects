import { takeLatest,put,all,call } from 'redux-saga/effects'

import UserActionTypes from './user.types'

import { signInSuccess,signInFailure, signOutSuccess, signOutFailure } from './user.actions';

import { auth, googleProvider, createUserProfileDocument,getCurrentUser } from '../../firebase/firebase.utils';
import { signInWithPopup,signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc } from "firebase/firestore";

export function* getSnapshotFromUserAuth(userAuth) {
    // Code tu API luon co the error nen phai catch
    try {
        const userRef = yield call(createUserProfileDocument,userAuth);
        const userSnapshot = yield getDoc(userRef);
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(signInFailure(error))
    }   
}

// Google Signin
export function* signInWithGoogle() {
    // Code tu API luon co the error nen phai catch
    try {
        const {user} = yield signInWithPopup(auth, googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error))
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
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

// CHECK SESSON

export function* isUserAuthenticated() {
    // Code check session o day
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))   
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

// Export Saga
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ])
}