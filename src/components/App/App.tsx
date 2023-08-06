import "./App.scss";
import Inputs from "../Inputs/Inputs";

import store from "./../../store";
import Message from "../Message/Message";
import { useSelector } from "react-redux";
import { MessageType } from "../../@types";

const App = () => {
  // const { messages, count } = store.getState().messages;
  const messages:MessageType[] = useSelector((state) => state.chat.messages);
  const count = useSelector((state) => state.chat.count);
  console.log(messages);
  
  return (
    
      <div id="app">
        {messages.map((message, key) => {
            console.log(`boucle sur la liste des messages - key:${key} - msg: ${message}`);
            return <Message key={key} index={key}/>
        })}
        <Inputs />

        <div style={{margin: '1rem'}}>{count}</div>
      </div>
  );
};

export default App;
