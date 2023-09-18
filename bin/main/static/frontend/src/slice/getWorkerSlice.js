import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


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

// const deleteWorker = () => { 
//   //setWorkerState({ ...workerState, clicked : 'delete' })

//   axios.delete(`/worker/${workerState.no}`)
//   .then( res => {
//       console.log(res.data);
//       //reloadWorkerList();
//   })
//   .catch(err => console.log('delete err', err))
// }



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
  extraReducers: (builder) => {
    builder
      .addCase(getWorker.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWorker.fulfilled, (state, action) => {
        state.loading = false;

        const data = action.payload;
        state.data = data;
      })
      .addCase(getWorker.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default getWorkerSlice.reducer;
