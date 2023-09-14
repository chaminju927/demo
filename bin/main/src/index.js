import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { legacy_createStore as createStore } from "redux";

//const store = createStore();


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);