import React from "react";
import "./Messages.scss";
import { AppState, MessageType } from "../../@types";
import { useSelector } from "react-redux";
import Message from "../Message/Message";


const Messages: React.FC = () => {

  const messages: MessageType[] = useSelector((state: AppState) => state.chat.messages);
  const count : number = useSelector((state: AppState) => state.chat.count);
  const time : number = useSelector((state: AppState) => state.chat.lastMessageTimestamp);

  return (
    <div className="messages" >
      <div className="messages_header">
        <em>{count} message{count > 1 && "s"} trouvé{count > 1 && "s"}</em>
        <em>Dernier message trouvé le {new Date(time).toLocaleString()}</em>
      </div>
      <section>
        {messages.map((messageData, key) => {
          return <Message key={key} messageData={messageData} />;
        })}
      </section>
    </div>
  );
};

export default Messages;
