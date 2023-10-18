"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
function MainComponent() {
    const [workerData, setWorkerData] = (0, react_1.useState)([
    //   no: 0;
    //   name: '';
    //   phone: '';
    //   email: '';
    ]);
    const [mainState, setMainState] = (0, react_1.useState)({
        data: {
            no: 0,
            name: '',
            phone: 0,
            email: ''
        },
        clicked: ''
    });
    (0, react_1.useEffect)(() => {
        // axios.get('/worker')
        // .then((response) => {
        //     console.log(response);
        // });
        console.log("main mounted");
    }, []); // workerData값에 의존성 추가
    //search이후 설정
    // const {data} = useSelector((state : RootState) => {
    //     return {
    //         data: state.data
    //     };
    // });
    //const data = useSelector((state: RootState) => state.reducer.data);
    const dispatch = (0, react_redux_1.useDispatch)();
    const inputNoChange = (e) => {
        //setWorkerData({ ...workerData, [e.target.name] : e.target.value });
        // console.log({workerData});
        console.log([e.target.name], e.target.value);
    };
    //search worker
    const searchBtn = () => {
        console.log(mainState);
        //dispatch(getWorker(mainState.data.no)); //파라미터 수정
        setMainState(Object.assign(Object.assign({}, mainState), { clicked: 'search' }));
    };
    //add worker 리턴
    const addBtn = () => {
        setMainState(Object.assign(Object.assign({}, mainState), { clicked: 'add' }));
    };
    //delete 요청
    // const deleteBtn = () => {
    //     setMainState({ ...mainState, data.no : data.no }); 
    //     dispatch(deleteWorker(mainState.no)); //파라미터 수정
    //     setMainState({ no: '', name: '', phone: '', email: '', clicked: '' });
    // }
    // const mainBtn = () => {
    //     setMainState({ no: '', name: '', phone: '', email: '', clicked: ''}); 
    // }
    // const editBtn = () => {
    //    setMainState({ no: data.no, name: data.name, phone: data.phone, email: data.email, clicked: 'edit'});
    //    //console.log({mainState});
    // }
    // // post요청
    // const saveBtn = () => {
    //     setMainState({ ...mainState, clicked: '' });
    //     dispatch(addWorker(mainState)) 
    //     .then(() => {
    //         // input값 초기화 -> 메인에서 인풋값 공란으로
    //        setMainState({ no: 0, name: '', phone: '', email: '', clicked: '' })
    //     });
    // };
    const addChange = (e) => {
        setMainState(Object.assign(Object.assign({}, mainState), { [e.target.name]: e.target.value }));
    };
    switch (mainState.clicked) {
        case 'search': //search 결과
            return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Worker Info" }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "no" }), (0, jsx_runtime_1.jsx)("th", { children: "name" }), (0, jsx_runtime_1.jsx)("th", { children: "email" }), (0, jsx_runtime_1.jsx)("th", { children: "phone" })] }) }), (0, jsx_runtime_1.jsx)("tbody", {})] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => addBtn(), children: "add" })] }));
        // case 'add':
        //     return (
        //         <div>
        //         <h2>Add Worker</h2>
        //         <form>
        //             <div>
        //                 <label>No:</label>
        //                 <input type="number" name="no"  onChange={addChange} value={mainState.no}/>
        //             </div>
        //             <div>
        //                 <label>Name:</label>
        //                 <input type="text" name="name" onChange={addChange} value={mainState.name} />
        //             </div>
        //             <div>
        //                 <label>Email:</label>
        //                 <input type="text" name="email" onChange={addChange} value={mainState.email} />
        //             </div>
        //             <div>
        //                 <label>Phone:</label>
        //                 <input type="number" name="phone" onChange={addChange} value={mainState.phone}/>
        //             </div>
        //             <button onClick={() => saveBtn()}>save</button>
        //         </form>
        //     </div>
        //     );
        // case 'edit' : 
        //     return (
        //         <div>
        //             <EditWorkerComponent workerType ={workerType} />
        //         </div>
        //     )
        default:
            return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Search" }), (0, jsx_runtime_1.jsx)("input", { type: "number", name: "no", placeholder: "\uC0AC\uBC88 \uC785\uB825", onChange: inputNoChange }), (0, jsx_runtime_1.jsx)("button", { onClick: () => searchBtn(), children: "search" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => addBtn(), children: "add" }), (0, jsx_runtime_1.jsx)("h2", { children: "WorkerList" }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "no" }), (0, jsx_runtime_1.jsx)("th", { children: "name" })] }) }), (0, jsx_runtime_1.jsx)("tbody", {})] })] }));
    }
}
exports.default = MainComponent;
