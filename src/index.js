import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Redux
import {Provider} from 'react-redux';

// Persist
import {PersistGate} from 'redux-persist/integration/react'
import {store,persistor} from './redux/store'

// STYLE SCSS
import './index.css';


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>  
    <BrowserRouter> 
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
