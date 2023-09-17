import { createAsyncThunk, createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

export const getWorker = createAsyncThunk("GET/NO", async () => {
    await axios.get(`worker/${workerState.no}`);
    console.log(res);
    setWorkerState({ ...res.data, searched:true});
})

// export const addWorker = createAsyncThunk("GET/NO", async () => {
//     const header = {"Content-type":"application/json"}
//     const data = {
//         no: workerState.no,
//         name: workerState.name,
//         email: workerState.email,
//         phone: workerState.phone
//     }
//     await axios.post('/worker', header, data);
//     console.log(res);
//     setWorkerState({ ...res.data, searched:true});
// })

// export const updateWorker = createAsyncThunk("PU", async () => {
//     const header = {"Content-type":"application/json"}
//     const data = {
//         no: workerState.no,
//         name: workerState.name,
//         email: workerState.email,
//         phone: workerState.phone
//     }
//     await axios.put('/worker', header, data);
//     console.log(res);
//     setWorkerState({ ...res.data, searched:true});
// })

/* 리덕스에서 관리 할 state의 초기값 */
const initialState = {
    worker: [
        {
            no: '',
            name: '',
            email: '',
            phone: ''
        }
    ] 
};

/* 액션 객체 타입 */
const searchBtn = 'CLICKED';

/* Action Creators - dispatch시 import해야하므로 export하기 */
export const btnClick = () => ({
    type: CLICKED,
});

// export const getWorker = (workerNo) => ({
//     type: GET,
//     workerNo
// });


/* Reducer */
//액션 생성함수들을 통해 만들어진 액션객체들을 참조하여 새로운 상태를 만드는 함수
export default function workerReducer(state = initialState, action) { 
    switch(action.type){
        case searchBtn:
            return{
                ...state  //다른 컴포넌트 렌더링 할수 있도록, props도 같이
            }
       
        default:
            return state;
    }
}

// /* 스토어 만들기 */
// const store = configureStore(workerReducer);
// console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회

// // 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
// const listener = () => {
//     const state = store.getState();
//     console.log(state);
// }

// //구독 해제시 호출 
// //subscribe 함수에 특정 함수를 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출
// const unsubscribe = store.unsubscribe(listener);

// //액션 디스패치
// // 액션이 디스패치 될 때마다 상태가 바뀌고, 이에 따라 listener 함수가 호출 될 것
// store.dispatch(addWorker());
// store.dispatch(getWorker());
// store.dispatch(updateWorker());
// store.dispatch(deleteWorker());

//참고 !!!!!!!!!!!
// import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // 비동기 작업을 위한 액션 크리에이터
//  getWorker 액션 크리에이터는 비동기 작업을 처리하고, 작업이 완료되면 데이터를 받아와서 
//workerReceived 액션을 디스패치.이렇게 액션을 디스패치하면 해당 액션을 처리하는 리듀서에서 상태를 업데이트할 수 있습니다.
// export const getWorker = createAsyncThunk('GET/NO', async (workerNo) => {
//   const response = await axios.get(`/worker/${workerNo}`);
//   return response.data;
// });

// // Redux Toolkit 슬라이스 생성
// const workerSlice = createSlice({
//   name: 'worker',
//   initialState: { data: null, loading: false, error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getWorker.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getWorker.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(getWorker.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { reducer } = workerSlice; // 슬라이스의 리듀서를 내보냅니다.

// // 스토어 생성
// const store = configureStore({
//   reducer: {
//     worker: reducer, // 슬라이스의 리듀서를 스토어에 등록합니다.
//   },
// });

// export default store;
