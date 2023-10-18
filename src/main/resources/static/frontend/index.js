"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = tslib_1.__importDefault(require("react"));
const react_dom_1 = tslib_1.__importDefault(require("react-dom")); // ReactDOM 라이브러리 임포트
const App_1 = tslib_1.__importDefault(require("./App"));
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
// export const store = configureStore(
//     //{ reducer : apiReducer }
//     //composeWithDevTools(),
//     apiReducer
// );
// export type RootState = ReturnType<typeof apiReducer.reducer;
const rootElement = document.getElementById('root');
if (!rootElement)
    throw new Error('Failed to find the root element');
react_dom_1.default.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_1.store, children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }) }), rootElement // 렌더링할 DOM 요소 지정
);
