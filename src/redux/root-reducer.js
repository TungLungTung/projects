import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
// Local store as default store
// sessionStorage
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer';

// Persist config
const persistConfig = {
    key: 'root',
    storage,
    whiteList: [
        'cart'
    ]
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig,rootReducer)