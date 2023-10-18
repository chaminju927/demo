"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const tslib_1 = require("tslib");
const toolkit_1 = require("@reduxjs/toolkit");
const apiReducer_1 = tslib_1.__importDefault(require("src/reducer/apiReducer"));
exports.store = (0, toolkit_1.configureStore)(apiReducer_1.default);
//export const useAppDispatch = () => useDispatch<AppDispatch>();
