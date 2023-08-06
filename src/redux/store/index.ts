import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '../reducers/chatReducer';

const store =  configureStore({
  reducer: {
    chat : chatReducer,
  }, 
  devTools: true,
})

export default store;