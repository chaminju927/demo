import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const deleteWorker = () => { 

  axios.delete(`/worker/${workerState.no}`)
  .then( res => {
      console.log(res.data);
      //reloadWorkerList();
  })
  .catch(err => console.log('delete err', err))
}
