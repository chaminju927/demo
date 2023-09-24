export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("../types/types").result, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<import("../types/types").result, import("redux").AnyAction>]>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
