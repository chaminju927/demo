import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const addWorker = createAsyncThunk(
  "WORKER/POST", 
    async (mainState) => {
      const response = await axios.post('/worker', mainState);
      return response;
});

export const getWorker = createAsyncThunk(
    'WORKER/GET', 
    async (no) => {
        const response = await axios.get(`/worker/${no}`);
        return response.data;
});

export const deleteWorker = createAsyncThunk (
  'WORKER/DELETE',
  async (no) => {
    const response = await axios.delete(`/worker/${no}`);
    console.log(response);
    return response.data;
  }
);

export const editWorker = createAsyncThunk(
  "WORKER/PUT", 
  async (editState) => {
    const response = await axios.put('/worker/update', editState);
    return response;
});


export const apiReducer = createSlice({
  name: 'WORKER',
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
      })
      .addCase(addWorker.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload;
        state.data = data;
      })
      .addCase(addWorker.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteWorker.fulfilled, (state, action) => {
        state.loading = false;
        state.data = {};
      })
      .addCase(deleteWorker.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editWorker.pending, (state) => {
        state.loading = true;
      })
      .addCase(editWorker.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload;
        state.data = data;
      })
      .addCase(editWorker.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});
export default apiReducer;
