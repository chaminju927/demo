import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import inputReducer from './slice/inputSlice';
import{ getWorkerSlice } from "./slice/getWorkerSlice";
import { configureStore } from "@reduxjs/toolkit";
import {composeWithDevTools} from 'redux-devtools-extension';
import { addWorkerSlice } from './slice/addWorkerSlice';


export const store = configureStore(
  {
    reducer : {
      input : inputReducer,
      get : getWorkerSlice.reducer,
      add : addWorkerSlice.reducer
    }
  }, 
  composeWithDevTools());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
