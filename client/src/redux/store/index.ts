import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '../reducers/chatReducer';
import authReducer from '../reducers/authReducer';
import { AppState } from '../../@types';

export type AppDispach = typeof store.dispatch;

const store =  configureStore<AppState>({
  reducer: {
    chat : chatReducer,
    auth : authReducer,
  }, 
  devTools: true,
})

export default store;