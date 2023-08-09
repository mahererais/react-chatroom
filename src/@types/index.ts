export type MessageType = {
    author: string,
    message: string,
    time: number,
     color?: string,
}

export type ChatState = {
    messages: MessageType[],
    count: number,
    lastMessageTimestamp: number
};

export type AuthState = {
    connectedUser : {
        username: string, // email de l'utilisateur connecté
        email: string, // pseudo de l'utilisateur connecté
    },
    isLoadind: boolean, // indique que l'on est en train de se connecter
}

 
export type AppState = {
    chat : ChatState,
    auth: AuthState, 
}