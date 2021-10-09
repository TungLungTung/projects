import ShopActionTypes from './shop.types'

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {getDocs,collection} from 'firebase/firestore'

export const fetchCollectionsStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START,
    }
}

export const fetchCollectionsFailure = (errorMessage) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
        payload: errorMessage
    }
}

export const fetchCollectionSuccess = collectionsMap => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }  
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = collection(firestore, 'collections');
        dispatch(fetchCollectionsStart());
        // Cach dung Promise
        getDocs(collectionRef).then(
            querySnapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(querySnapshot);
                dispatch(fetchCollectionSuccess(collectionsMap))
            }
        ).catch(error => {
            return dispatch(fetchCollectionsFailure(error.message));    
        })
    }
}

