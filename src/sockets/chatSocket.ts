import { socket } from ".";
import { incrementCount, newMessage, updateTimeStamp } from "../redux/action/chatAction";
import store from "../redux/store";

export const sendMessageToSocket = (author: string, message: string, time:number,color?: string) => {

    // = 'send message' est le tube d'ecoute du server
    // = voir server/server.js ligne 133
    socket.emit('send_message', {
        author,
        message,
        color,
        time
    });

}

export const listenToNewMessages =  () => {
    socket
        .on('send_message', (data) => {
            console.log(data);
            store.dispatch(newMessage(data));
            store.dispatch(incrementCount());
            store.dispatch(updateTimeStamp());
        })
        
}