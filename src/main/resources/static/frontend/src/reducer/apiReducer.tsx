import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { workerType, result } from '../types/common';
import { RootState } from "src/store";

const initialState: result = {
  loading: false,
  error: '',
  data: {
    no: 0,
    name: '',
    phone: 0,
    email: ''
  }
}
export const addWorker = createAsyncThunk(
  "WORKER/POST" as const, 
    async (mainState: workerType) => {  
      const response = await axios.post('/worker', mainState);
      return response;
});

export const getWorker = createAsyncThunk(
    'WORKER/GET' as const, 
    async (no: number) => {
        const response = await axios.get(`/worker/${no}`);
        return response.data;
});

export const deleteWorker = createAsyncThunk (
  'WORKER/DELETE' as const,
  async (no: number) => {
    const response = await axios.delete(`/worker/${no}`);
    console.log(response);
    return response.data;
  });

export const editWorker = createAsyncThunk(
  "WORKER/PUT" as const, 
  async (editState: workerType) => {
    const response = await axios.put('/worker/update', editState);
    return response;
});

export const apiReducer = createSlice({
  name: 'WORKER',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {  // 외부에서 정의된 액션크리에이터 사용시 extraReducers사용
    builder
      .addCase(getWorker.pending, (state: any) => {  
        state.loading = true;
      })
      // .addCase(getWorker.fulfilled, (state: a, {payload}: PayloadAction<{data :workerType}>) => {
        .addCase(getWorker.fulfilled, (state: RootState, action:any ) => {
        state.loading = false;
       // state.error = null;
        const data = action.payload; 
        state.data = data;
      })
      .addCase(getWorker.rejected, (state:any, action:any) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addWorker.fulfilled, (state:any, action:any) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(addWorker.rejected, (state:any, action:any) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteWorker.fulfilled, (state:any) => {
        state.loading = false;
        state.data = {};
      })
      .addCase(deleteWorker.rejected, (state:any, action:any) => {
        state.loading = false;
        state.error = action.payload;
      })
      // .addCase(editWorker.pending, (state: RootState) => {
      //   state.loading = true;
      // }
      .addCase(editWorker.fulfilled, (state:any, action:any) => {
        state.loading = false;
        state.data =  action.payload;
      })
      .addCase(editWorker.rejected, (state:any, action:any) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});
export default apiReducer;
