"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiReducer = exports.editWorker = exports.deleteWorker = exports.getWorker = exports.addWorker = void 0;
const tslib_1 = require("tslib");
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = tslib_1.__importDefault(require("axios"));
//import { RootState } from "src/store";
const initialState = {
    loading: false,
    error: '',
    data: []
};
exports.addWorker = (0, toolkit_1.createAsyncThunk)("WORKER/POST", (mainState) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post('/worker', mainState);
    return response;
}));
exports.getWorker = (0, toolkit_1.createAsyncThunk)('WORKER/GET', (no) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`/worker/${no}`);
    return response.data;
}));
exports.deleteWorker = (0, toolkit_1.createAsyncThunk)('WORKER/DELETE', (no) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.delete(`/worker/${no}`);
    console.log(response);
    return response.data;
}));
exports.editWorker = (0, toolkit_1.createAsyncThunk)("WORKER/PUT", (editState) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.put('/worker/update', editState);
    return response;
}));
exports.apiReducer = (0, toolkit_1.createSlice)({
    name: 'WORKER',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(exports.getWorker.pending, (state) => {
            state.loading = true;
        })
            .addCase(exports.getWorker.fulfilled, (state, { payload }) => {
            state.loading = false;
            // state.error = null;
            const data = payload;
            // state.data = data;
        })
            // .addCase(getWorker.fulfilled, (state: any, action: any) => {
            //   state.loading = false;
            //  // state.error = null;
            //   const data = action.payload; 
            //  // state.data = data;
            // })
            .addCase(exports.getWorker.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
            .addCase(exports.addWorker.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
        })
            .addCase(exports.addWorker.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
            .addCase(exports.deleteWorker.fulfilled, (state) => {
            state.loading = false;
            state.data = {};
        })
            .addCase(exports.deleteWorker.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
            // .addCase(editWorker.pending, (state: RootState) => {
            //   state.loading = true;
            // }
            .addCase(exports.editWorker.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
            .addCase(exports.editWorker.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});
exports.default = exports.apiReducer;
