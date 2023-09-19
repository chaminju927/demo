import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    no: '',
    name: '',
    phone: '',
    email: ''
  }
  
  const inputSlice = createSlice({
     name: 'INPUT',
     initialState,
     reducers : {
            setNo(state, action) {   //이전에 정의했던 액션 생성자 함수
                const no = action.payload;  //해당 액션과 같이 전달하는 값
                state.no = no;
            },
            setName(state, action){
                const name = action.payload;
                state.name = name;
            },
            setEmail(state, action) {
                const email = action.payload;
                state.email = email;
            },
            setPhone(state, action){
                const phone = action.payload;
                state.phone = phone;
            },
            resetNo(state, action){
                state.no = action.payload;
                //state.no = '';
            },
            resetName(state, action){
                state.name = action.payload;
            },
            resetEmail(state, action){
                state.email = action.payload;
            },
            resetPhone(state, action){
                state.phone = action.payload;
            }
     }
  });
  export const { setNo, setName, setEmail, setPhone, resetNo, resetName, resetEmail, resetPhone } = inputSlice.actions;  //액션타입은 WORKERS/setNo
  export default inputSlice.reducer;
  