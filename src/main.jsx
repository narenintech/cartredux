import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import productReducer from './productSlice.js'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'

const store = configureStore({
  reducer:{
    items:productReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </Provider>
);

