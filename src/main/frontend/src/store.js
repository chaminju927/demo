import { legacy_createStore as createStore } from "redux";

/* 리덕스에서 관리 할 state의 초기값 */
const initialState = {
    worker: []
};

/* 액션 타입 정의 */
const ADD = 'ADD';
const GET = 'GET';
const CHANGE = 'CHANGE';
const DELETE = 'DELETE';

/* 액션 생성함수 정의 */
export const add = () => ({
    type: ADD
});

export const get = () => ({
    type: GET
});

export const change = text => ({
    type: CHANGE,
    text
});

// export const delete = (no) => ({
//     type: DELETE,
//     no
// });

/* 리듀서 만들기 */
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여 새로운 상태를 만드는 함수를 만들기
export default function reducer(state = initialState, action) {
    switch(action.type){
        case ADD:
            return {
                ...state,
                worker: state.worker.concat(action.item)
            };
        case GET:
            return {
                ...state,

            };
        case CHANGE:
            return {
                ...state,  // state 내부의 값을 복사해 옴
                worker: state.worker.concat(action.item)
            };
        case DELETE: 
            return {
                ...state,
                worker: []
            }
        default:
            return state;
    }
}

/* 스토어 만들기 */
const store = createStore(reducer);
console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
}

//구독 해제시 호출 
//subscribe 함수에 특정 함수를 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출
const unsubscribe = store.unsubscribe(listener);

//액션 디스패치
// store.dispatch(add());
// store.dispatch(get());
// store.dispatch(change());