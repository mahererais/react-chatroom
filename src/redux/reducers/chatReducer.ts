import { Reducer, createReducer } from '@reduxjs/toolkit';
import { MessageType , ChatState} from '../../@types';
import * as chatAction from '../action/chatAction';


const initialState: ChatState = {
  messages: [],
  count: 0,
  lastMessageTimestamp: new Date().getTime(),
};

const chatReducer: Reducer<ChatState> = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(chatAction.newMessage, (state, action) => {
        state.messages.push(action.payload as MessageType);
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
