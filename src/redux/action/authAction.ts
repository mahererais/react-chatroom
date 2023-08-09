import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export type ConnectThunk = {
    email: string,
    username: string,
}

interface CustomResponse extends Response {
    pseudo?: string,
}

type ConnectPayload = {
  email: string;
  password: string;
};

// ConnectPayload c'est le type du payload
export const connectAction_v1 = createAction<ConnectPayload>("auth/CONNECT");

// ! createAsyncThunk, c'est parce que l'action connection sera une Promise, donc createAction ne fonctionnera pas
export const connectAction = createAsyncThunk(
  "auth/CONNECT",
  async (payload: ConnectPayload) => {
    let response: CustomResponse = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });

    response = await response.json();
    
    console.log(response);
    return {
        username : response.pseudo,
        email: payload.email,
    };
  }
);

export const disconnectAction = createAction("auth/DISCONNECT");

export const enableLoadingAction = createAction("auth/ENABLE_LOADING");

export const disableLoadingAction = createAction("auth/DISABLE_LOADING");
