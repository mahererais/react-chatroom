import "./Chat.scss";

import Inputs from "../FormSender/FormSender";
import Messages from "../Messages/Messages";
import Setting from "../Setting/Setting";
import { closeListenToMessageSocket, listenToNewMessages } from "../../sockets/chatSocket";
import { useEffect } from "react";


const App = () => {
  
  useEffect(() => {
    listenToNewMessages()
    
    // quand je return quelque chose dans  un useEffect, cette derniere est executée lors de la 
    // disparition du composant. Donc => lorsque le composant disparait, on va avoir l'ecouteur du 
    // canal 'send_message' (du socket) qui sera éteint. Ainsi, on se risque pas d'avoir des ecouteurs
    // fantômes
    return () => closeListenToMessageSocket();
  }, []);
  

  return (
    <div id="chat">
      <Setting />
      <Messages />
      <Inputs />
    </div>
  );
};

export default App;
