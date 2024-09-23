import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import React from 'react'
import store from './redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
