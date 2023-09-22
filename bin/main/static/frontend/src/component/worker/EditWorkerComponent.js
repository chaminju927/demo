"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const apiReducer_1 = require("../../reducer/apiReducer");
const MainComponent_1 = tslib_1.__importDefault(require("./MainComponent"));
function EditWorkerComponent(Info) {
    const { no, name, email, phone } = Info;
    const [editState, setEditState] = (0, react_1.useState)({
        no: no,
        name: name,
        phone: phone,
        email: email
    });
    const dispatch = (0, react_redux_1.useDispatch)();
    const { data } = (0, react_redux_1.useSelector)((state) => {
        return {
            //data: state.reducer.data //스토어에서 다시 확인
            data: state.data
        };
    });
    (0, react_1.useEffect)(() => {
        // console.log(props);
        // console.log(data);
    }, [editState]);
    const editChange = (e) => {
        // console.log({editState});
        setEditState(Object.assign(Object.assign({}, editState), { [e.target.name]: e.target.value }));
        //console.log({editState});
    };
    // put 요청
    const saveBtn = () => {
        dispatch((0, apiReducer_1.editWorker)(editState))
            .then(() => {
            return ((0, jsx_runtime_1.jsx)(MainComponent_1.default, {}));
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Edit Worker" }), (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "No:" }), (0, jsx_runtime_1.jsx)("input", { type: "number", name: "no", value: data.no, readOnly: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Name:" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", defaultValue: data.name, onChange: editChange })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Email:" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "email", defaultValue: data.email, onChange: editChange })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Phone:" }), (0, jsx_runtime_1.jsx)("input", { type: "number", name: "phone", defaultValue: data.phone, onChange: editChange })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => saveBtn(), children: "save" })] })] }));
}
exports.default = EditWorkerComponent;
