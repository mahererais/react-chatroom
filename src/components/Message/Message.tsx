import React from "react";
import './Message.scss';
import { AppState, MessageType } from "../../@types";
import { useSelector } from "react-redux";

type iProps = {
    messageData: MessageType,
    color: string
}

const Message: React.FC<iProps> = ({messageData: message}) => {
    
    const currentUser = useSelector((state:AppState) => state.auth.connectedUser.username);
    
    if (!message)
        return <></>;
    
    return (
        <div className={`message_container ${message.author === currentUser ? "right" : ""}`}>
            { message.author !== currentUser && <p className="author">{message.author}</p> } 
            <p className="message" style={{backgroundColor: message.color}}>{message.message}</p>
        </div>
    )
}


export default Message;