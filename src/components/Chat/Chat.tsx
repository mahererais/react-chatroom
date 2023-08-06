import "./Chat.scss";
import Inputs from "../Inputs/Inputs";

import Message from "../Message/Message";
import { useSelector } from "react-redux";
import { MessageType } from "../../@types";

const App = () => {
  // const { messages, count } = store.getState().messages;
  const messages: MessageType[] = useSelector((state) => state.chat.messages);
  console.log(messages);

  return (
    <div id="chat">
      <div className="messages">
        {messages.map((message, key) => {
          console.log(
            `boucle sur la liste des messages - key:${key} - msg: ${message}`
          );
          return <Message key={key} index={key} />;
        })}
      </div>
      <Inputs />
    </div>
  );
};

export default App;
