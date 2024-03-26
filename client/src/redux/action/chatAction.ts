import { createAction } from "@reduxjs/toolkit";
import { MessageType } from "../../@types";

export const newMessage = createAction<MessageType>('chat/newMessage')
export const incrementCount = createAction('chat/incrementCount')
export const updateTimeStamp = createAction('chat/updateTimeStamp')
