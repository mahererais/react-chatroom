import { Reducer, createReducer } from '@reduxjs/toolkit';
import {connectAction, disconnectAction, ConnectThunk, disableLoadingAction, enableLoadingAction} from '../action/authAction';
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
            .addCase(connectAction.rejected, (state) => {
                //window.alert("Connexion impossible: Identifiants invalides")
                console.error("Connexion impossible: Identifiants invalides");
                //****state.isLoadind = false;
                state.connectedUser.email = "";
                state.connectedUser.username = "";
                state.connectedUser.color = "";
            })
            .addCase(connectAction.fulfilled, (state, action) => {
                //***state.isLoadind = false;
                state.connectedUser.email = (action.payload as ConnectThunk).email;
                state.connectedUser.username = (action.payload as ConnectThunk).username;
                state.connectedUser.color = (action.payload as ConnectThunk).color;
            })
            .addCase(disconnectAction, (state) => {
                state.connectedUser.email = "";
                state.connectedUser.username = "";
                state.connectedUser.color = undefined;
                state.isLoadind = false;
            })
            .addCase(enableLoadingAction, (state) => {
                state.isLoadind = true;
            })
            .addCase(disableLoadingAction, (state) => {
                state.isLoadind = false;
            })
    }
);

export default authReducer;

