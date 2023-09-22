import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "src/reducer/apiReducer";

export const store = configureStore(apiReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//export const useAppDispatch = () => useDispatch<AppDispatch>();