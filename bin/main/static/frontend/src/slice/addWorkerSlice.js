// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// export const addWorkerSlice = createSlice({
//   name: 'POST',
//   initialState: {},
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addWorker.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(addWorker.fulfilled, (state, action) => {
//         state.loading = false;
        
//         const data = action.payload;
//         state.data = data;
//       })
//       .addCase(addWorker.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });
// export default addWorkerSlice.reducer;