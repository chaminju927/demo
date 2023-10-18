"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const RouterComponent_1 = tslib_1.__importDefault(require("./component/route/RouterComponent"));
const App = () => {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(RouterComponent_1.default, {}) }));
};
exports.default = App;
