import React from 'react';
import {createRoot} from 'react-dom/client';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import apiReducer from './reducer/apiReducer';


// export const store = configureStore(
//     { reducer : apiReducer }, 
//     composeWithDevTools()
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');
if(!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);  
root.render(
  <React.StrictMode>
  
    <App />
   
  </React.StrictMode>
);