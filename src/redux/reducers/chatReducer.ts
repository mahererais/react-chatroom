import { createAction, createReducer } from "@reduxjs/toolkit";
import { MessageType } from '../../@types'

type MessagesType = {
    messages: MessageType[],
    count: number,
    lastMessageTimestamp: number
};

// type ActionType = {
//     type: string,
//     payload: MessageType
// }

const initialState: MessagesType = {
    messages: [],
    count: 0,
    lastMessageTimestamp: -1,
}

const chatReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        createAction("message/new"),
        (state, action) => {
            
            state.messages.push((action.payload) as MessageType);
            state.count += 1;
            state.lastMessageTimestamp = new Date().getTime()
            
        })
});

export default chatReducer;