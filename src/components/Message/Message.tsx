import React from "react";
import './Message.scss';
import { MessageType } from "../../@types";

type iProps = {
    messageData: MessageType,
    color: string
}

const Message: React.FC<iProps> = ({messageData: message, color}) => {

    if (!message)
        return <></>;


    console.log(message.color);
    

    return (
        <div className={`message_container ${message.author === "Me" ? "right" : ""}`}>
            <p className="author">{message.author}</p>
            <p className="message" style={{backgroundColor:color}}>{message.message}</p>
        </div>
    )
}


export default Message;