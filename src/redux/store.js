import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

// Hàm này để lưu trữ các redux reducer vào Persist (Local và Session)
import {persistStore} from 'redux-persist'

// Import tất cả các reducer vào 1 file
import rootReducer from './root-reducer';

// Apply middleware function khi action gui toi reducer
// Beetween action va root reducer
const middlewares = [thunk];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

// Biến persistor lưu trữ reducer store dưới dạng persist
export const persistor = persistStore(store);

