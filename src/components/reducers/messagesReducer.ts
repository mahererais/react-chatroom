import { createAction, createReducer } from "@reduxjs/toolkit";
import { MessageType } from '../../@types'

type MessagesType = {
    messages: MessageType[],
    count: number
};

const initialState: MessagesType = {
    messages: [],
    count: 0,
}

const messagesReducer = createReducer(initialState, (reducer) => {
    reducer.addCase(
        createAction("message/new"),
        (state, action) => {
            // console.log("new message : ");
            // console.log(action.payload);
            
            state.messages.push(action.payload as MessageType);
            state.count += 1;
            
        })
});

export default messagesReducer;