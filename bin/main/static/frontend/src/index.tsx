
import React from 'react';
import ReactDOM from 'react-dom'; // ReactDOM 라이브러리 임포트
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import apiReducer from './reducer/apiReducer';

// export const store = configureStore(
//     //{ reducer : apiReducer }
//     //composeWithDevTools(),
//     apiReducer
// );
// export type RootState = ReturnType<typeof apiReducer.reducer;

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement // 렌더링할 DOM 요소 지정
);
export type RootState = ReturnType<typeof apiReducer.reducer>;






