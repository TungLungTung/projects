import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga';

// Hàm này để lưu trữ các redux reducer vào Persist (Local và Session)
import {persistStore} from 'redux-persist'

// Import tất cả các reducer vào 1 file
import rootReducer from './root-reducer';

// Saga
const sagaMiddleware = createSagaMiddleware();

// Apply middleware function khi action gui toi reducer
// Beetween action va root reducer
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// Biến persistor lưu trữ reducer store dưới dạng persist
export const persistor = persistStore(store);

