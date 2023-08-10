import { socket } from ".";

export const sendMessage = (author: string, message: string, time:number,color?: string) => {

    // = 'send message' est le tube d'ecoute du server
    // = voir server/server.js ligne 133
    socket.emit('send_message', {
        author,
        message,
        color,
        time
    });

}