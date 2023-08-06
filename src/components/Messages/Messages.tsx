import React from "react";
import "./Messages.scss";
import { MessageType } from "../../@types";
import { useSelector } from "react-redux";
import Message from "../Message/Message";


const Messages: React.FC = () => {

  const messages: MessageType[] = useSelector((state) => state.chat.messages);
  console.log(messages);


  return (
    <div className="messages">
      {messages.map((message, key) => {
        console.log(
          `boucle sur la liste des messages - key:${key} - msg: ${message}`
        );
        return <Message key={key} index={key} />;
      })}
    </div>
  );
};

export default Messages;
