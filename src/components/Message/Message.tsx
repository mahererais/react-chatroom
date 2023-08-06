import React from "react";
import './Message.scss';
import store from "../../store";
import { MessageType } from "../../@types";

type Props = {
    index: number,
}

const Message: React.FC<Props> = ({index}) => {

    console.log(index);

    const {messages} = store.getState().chat;
    

    const message: MessageType = messages[index];

    if (!message)
        return <></>;

    return (
        <div className="message_container">
            <p className="author">{(message as MessageType).author}</p>
            <p className="message">{(message as MessageType).message}</p>
        </div>
    )
}


export default Message;