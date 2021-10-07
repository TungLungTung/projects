import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'

// Local store as default store
// Nếu dùng session thì khởi tạo sessionStorage
import storage from 'redux-persist/lib/storage'

// Các reducer nhỏ hơn
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/direct.reducer';
import shopReducer from './shop/shop.reducers';

// Persist config
const persistConfig = {
    key: 'root',
    storage,
    whiteList: [
        'cart'
    ]
}

// Combie các reducer trong redux lại
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

// Sử dụng persist để lưu trữ các redux dưới dạng local và session
export default persistReducer(persistConfig,rootReducer)