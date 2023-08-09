import React from "react";
import './Message.scss';
import { MessageType } from "../../@types";

type iProps = {
    messageData: MessageType,
}

const Message: React.FC<iProps> = ({messageData: message}) => {

    if (!message)
        return <></>;


    console.log(message.color);
    

    return (
        <div className={`message_container ${message.author === "Me" ? "right" : ""}`}>
            <p className="author">{message.author}</p>
            <p className="message" style={{backgroundColor:message.color}}>{message.message}</p>
        </div>
    )
}


export default Message;