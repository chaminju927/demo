import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
//import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import workerReducer from './workerReducer';


//import rootReducer from './reducers';

const store = createStore(workerReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );