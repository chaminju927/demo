import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// 비동기 작업을 위한 액션 크리에이터
export const getWorker = createAsyncThunk(
    'WORKER/GET', 
    async (no) => {
        const response = await axios.get(`/worker/${no}`);
        console.log(response);
        return response.data;
});

// // Redux Toolkit 슬라이스 생성
export const getWorkerSlice = createSlice({
  name: 'GET',
  initialState: {
      data: '',
      loading: false, 
      error: null 
  },
  reducers: {},
  extraReducers: (builder) => {  // 외부에서 정의된 액션크리에이터 사용시 extraReducers사용
    builder
      .addCase(getWorker.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWorker.fulfilled, (state, action) => {
        state.loading = false;

        const data = action.payload;  //payload는 컴포넌트에서 인자로 보낸것
        state.data = data;
      })
      .addCase(getWorker.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default getWorkerSlice.reducer;
