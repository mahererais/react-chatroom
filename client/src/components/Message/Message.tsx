import {React, useState} from "react";
import './Message.scss';
import { AppState, MessageType } from "../../@types";
import { useSelector } from "react-redux";

type iProps = {
    messageData: MessageType,
    color: string
}

const Message: React.FC<iProps> = ({messageData: message}) => {
    
    const currentUser = useSelector((state:AppState) => state.auth.connectedUser.username);

    const [showTimer, setShowTimer] = useState(false);

    const toggleShowTimer = () => {
        setShowTimer((prev: boolean) => !prev)
    }
    
    if (!message)
        return <></>;
    
    return (
        <div className={`message_container ${message.author === currentUser ? "right" : ""}`} onClick={toggleShowTimer}>
            { message.author !== currentUser && <p className="author">{message.author}</p> } 
            <p className="message" style={{backgroundColor: message.color}}>{message.message}</p>
            <p className={`timer ${!showTimer ? " hide": ""}`} >envoyé le {new Date(message.time).toLocaleString()}</p>
        </div>
    )
}


export default Message;