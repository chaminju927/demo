import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteWorker = createAsyncThunk (
  'WORKER/DELETE',
  async (no) => {
    const response = await axios.delete(`/worker/${no}`);
    console.log(response);
    return response.data;
  }
);

export const deleteWorkerSlice = createSlice({
  name: 'DELETE',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteWorker.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteWorker.fulfilled, (state, action) => {
        state.loading = false;
        state.data = {};
      })
      .addCase(deleteWorker.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default deleteWorkerSlice.reducer;



