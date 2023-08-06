import "./Chat.scss";
import Inputs from "../FormSender/FormSender";

import Messages from "../Messages/Messages";
import { useSelector } from "react-redux";
import { MessageType } from "../../@types";

const App = () => {
  

  return (
    <div id="chat">
      <Messages />
      <Inputs />
    </div>
  );
};

export default App;
