import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import workerReducer from './workerReducer'
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk'


// const logger = createLogger();
// const configureStore = createStore(workerReducer, applyMiddleware(logger, ReduxThunk))

// export default configureStore;

export default configureStore({
	reducer: workerReducer
})