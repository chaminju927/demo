import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "src/store";

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
  extraReducers: (builder) => {  // 외부에서 정의된 액션크리에이터 사용시 extraReducers사용
    builder
      // .addCase(getWorker.pending, (state) => {  
      //   state.loading = true;
      // })
      .addCase(getWorker.fulfilled, (state: RootState, action: PayloadAction<workerType>) => {
        state.loading = false;
        state.error = null;
        const data = action.payload; 
        state.data = data;
      })
      .addCase(getWorker.rejected, (state, payload) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addWorker.fulfilled, (state: RootState, action) => {
        state.loading = false;
        state.error = null;
        state.data = data;
      })
      .addCase(addWorker.rejected, (state: RootState, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteWorker.fulfilled, (state: RootState) => {
        state.loading = false;
        state.data = {};
      })
      .addCase(deleteWorker.rejected, (state: RootState, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // .addCase(editWorker.pending, (state: RootState) => {
      //   state.loading = true;
      // }
      .addCase(editWorker.fulfilled, (state: RootState, action: PayloadAction<workerType>) => {
        state.loading = false;
        const data = action.payload;
        state.data = data;
      })
      .addCase(editWorker.rejected, (state: RootState, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});
export default apiReducer;
