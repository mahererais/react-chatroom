import { Reducer, createReducer } from '@reduxjs/toolkit';
import { MessageType , ChatState} from '../../@types';
import * as chatAction from '../action/chatAction';


const initialState: ChatState = {
  messages: [{
    author: 'anonyme',
    message: "voici mon message secret",
    time: 123455465,
  }],
  count: 1,
  lastMessageTimestamp: new Date().getTime(),
};

const chatReducer: Reducer<ChatState> = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(chatAction.newMessage, (state, action) => {
        state.messages.unshift(action.payload as MessageType);
      })
      .addCase(chatAction.incrementCount, (state) => {
        state.count += 1;
      })
      .addCase(chatAction.updateTimeStamp, (state) => {
        state.lastMessageTimestamp = new Date().getTime();
      });
  }
);

export default chatReducer;
