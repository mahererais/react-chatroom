//import React, { useEffect, useState } from "react";
import "./Messages.scss";
import { AppState, MessageType } from "../../@types";
import { useSelector } from "react-redux";
import Message from "../Message/Message";


const Messages: React.FC = () => {

  const messages: MessageType[] = useSelector((state: AppState) => state.chat.messages);
  const count : number = useSelector((state: AppState) => state.chat.count);
  const time : number = useSelector((state: AppState) => state.chat.lastMessageTimestamp);

  const messageColor = useSelector((state: AppState) => state.auth.connectedUser.color);
  //const email = useSelector((state: AppState) => state.auth.connectedUser.email);
  //const [messageColor, setMessageColor] = useState("");

  // useEffect(() => {
  //   if (email) {
  //     fetch(`http://localhost:3001/theme/${email}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setMessageColor(data.color)
  //     })
  //     .catch(error => {console.error(error);})
  //   }else{
  //     setMessageColor("");
  //   }
  // }, [email]);

  return (
    <div className="messages" >
      <div className="messages_header">
        <em>{count} message{count > 1 && "s"} trouvé{count > 1 && "s"}</em>
        <em>Dernier message trouvé le {new Date(time).toLocaleString()}</em>
      </div>
      <section>
        {messages.map((messageData, key) => {
          return <Message key={key} messageData={messageData} color={messageColor || "dodgerblue"}/>;
        })}
      </section>
    </div>
  );
};

export default Messages;
