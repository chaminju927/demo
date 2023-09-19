import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const editWorker = createAsyncThunk(
    "WORKER/PUT", 
    async (inputState) => {

    const response = await axios.put('/worker/update', inputState);
    return response;
});

export const editWorkerSlice = createSlice({
    name: 'PUT',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
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

export default editWorkerSlice.reducer;