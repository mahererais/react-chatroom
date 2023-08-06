import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from '../components/reducers/messagesReducer';

const store =  configureStore({
  reducer: {
    chat : messagesReducer,
  }
})

export default store;