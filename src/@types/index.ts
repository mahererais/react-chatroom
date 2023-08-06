export type MessageType = {
    author: string,
    message: string,
    time: number,
}

export type ChatState = {
    messages: MessageType[],
    count: number,
    lastMessageTimestamp: number
};


export type AppState = {
    chat : ChatState,
}