import { Reducer, createReducer } from '@reduxjs/toolkit';
import {connectAction, disconnectAction, ConnectThunk} from '../action/authAction';
import { AuthState } from '../../@types';


const initialState: AuthState = {
    connectedUser : {
        username: "", 
        email: "", 
    },
    isLoadind: false,
}

const authReducer : Reducer <AuthState> = createReducer(
    initialState, 
    (builder) => {
        builder
            .addCase(connectAction.pending, (state) => {
                state.isLoadind = true;
            })
            .addCase(connectAction.fulfilled, (state, action) => {
                state.isLoadind = false;
                state.connectedUser.email = (action.payload as ConnectThunk).email;
                state.connectedUser.username = (action.payload as ConnectThunk).username;
            })
            .addCase(disconnectAction, (state) => {
                state.connectedUser.email = "";
                state.connectedUser.username = "";
            })
    }
);

export default authReducer;

