import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import bookReducer from './redux/bookSlice.jsx'
import React from 'react'

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
