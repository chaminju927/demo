"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const apiReducer_1 = require("../../reducer/apiReducer");
const axios_1 = tslib_1.__importDefault(require("axios"));
const EditWorkerComponent_1 = tslib_1.__importDefault(require("./EditWorkerComponent"));
function MainComponent() {
    const [workerData, setWorkerData] = (0, react_1.useState)([]);
    const [mainState, setMainState] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield axios_1.default.get('/worker');
            return result.data;
        });
    }, [workerData]); // workerData값에 의존성 추가
    //search이후 설정
    const { data } = (0, react_redux_1.useSelector)((state) => {
        return {
            data: state.data
        };
    });
    //const data = useSelector((state: RootState) => state.reducer.data);
    const dispatch = (0, react_redux_1.useDispatch)();
    const inputNoChange = (e) => {
        setMainState(Object.assign(Object.assign({}, mainState), { [e.target.name]: e.target.value }));
        //console.log({mainState});
    };
    //search worker
    const searchBtn = () => {
        //console.log(mainState);
        // dispatch(getWorker(mainState.no)); 파라미터 수정
        setMainState(Object.assign(Object.assign({}, mainState), { clicked: 'search' }));
    };
    //add worker 리턴
    const addBtn = () => {
        setMainState(Object.assign(Object.assign({}, mainState), { clicked: 'add' }));
    };
    //delete 요청
    const deleteBtn = () => {
        setMainState(Object.assign(Object.assign({}, mainState), { no: data.no }));
        dispatch((0, apiReducer_1.deleteWorker)(mainState.no)); //파라미터 수정
        setMainState({ no: '', name: '', phone: '', email: '', clicked: '' });
    };
    const mainBtn = () => {
        setMainState({ no: '', name: '', phone: '', email: '', clicked: '' });
    };
    const editBtn = () => {
        setMainState({ no: data.no, name: data.name, phone: data.phone, email: data.email, clicked: 'edit' });
        //console.log({mainState});
    };
    // post요청
    const saveBtn = () => {
        setMainState(Object.assign(Object.assign({}, mainState), { clicked: '' }));
        dispatch((0, apiReducer_1.addWorker)(mainState))
            .then(() => {
            // input값 초기화 -> 메인에서 인풋값 공란으로
            setMainState({ no: '', name: '', phone: '', email: '', clicked: '' });
        });
    };
    const addChange = (e) => {
        setMainState(Object.assign(Object.assign({}, mainState), { [e.target.name]: e.target.value }));
    };
    switch (mainState.clicked) {
        case 'search': //search 결과
            return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Worker Info" }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "no" }), (0, jsx_runtime_1.jsx)("th", { children: "name" }), (0, jsx_runtime_1.jsx)("th", { children: "email" }), (0, jsx_runtime_1.jsx)("th", { children: "phone" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: data.no }), (0, jsx_runtime_1.jsx)("td", { children: data.name }), (0, jsx_runtime_1.jsx)("td", { children: data.email }), (0, jsx_runtime_1.jsx)("td", { children: data.phone }), (0, jsx_runtime_1.jsxs)("td", { children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => editBtn(), children: "edit" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => deleteBtn(), children: "delete" })] })] }) })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => mainBtn(), children: "main" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => addBtn(), children: "add" })] }));
        case 'add':
            return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Add Worker" }), (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "No:" }), (0, jsx_runtime_1.jsx)("input", { type: "number", name: "no", onChange: addChange, value: mainState.no })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Name:" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", onChange: addChange, value: mainState.name })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Email:" }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "email", onChange: addChange, value: mainState.email })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Phone:" }), (0, jsx_runtime_1.jsx)("input", { type: "number", name: "phone", onChange: addChange, value: mainState.phone })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => saveBtn(), children: "save" })] })] }));
        case 'edit':
            return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(EditWorkerComponent_1.default, { workerType: apiReducer_1.workerType }) }));
        default:
            return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Search" }), (0, jsx_runtime_1.jsx)("input", { type: "number", name: "no", placeholder: "\uC0AC\uBC88 \uC785\uB825", onChange: inputNoChange, value: mainState.no }), (0, jsx_runtime_1.jsx)("button", { onClick: () => searchBtn(), children: "search" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => addBtn(), children: "add" }), (0, jsx_runtime_1.jsx)("h2", { children: "WorkerList" }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "no" }), (0, jsx_runtime_1.jsx)("th", { children: "name" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: workerData.map((worker, index) => ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: worker.no }), (0, jsx_runtime_1.jsx)("td", { children: worker.name })] }, index))) })] })] }));
    }
}
exports.default = MainComponent;
