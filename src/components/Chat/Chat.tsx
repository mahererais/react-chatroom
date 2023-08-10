import "./Chat.scss";

import Inputs from "../FormSender/FormSender";
import Messages from "../Messages/Messages";
import Setting from "../Setting/Setting";
import { listenToNewMessages } from "../../sockets/chatSocket";
import { useEffect } from "react";


const App = () => {
  
  useEffect(() => listenToNewMessages(), []);
  

  return (
    <div id="chat">
      <Setting />
      <Messages />
      <Inputs />
    </div>
  );
};

export default App;
