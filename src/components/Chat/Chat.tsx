import "./Chat.scss";
import Inputs from "../FormSender/FormSender";

import Messages from "../Messages/Messages";

const App = () => {
  

  return (
    <div id="chat">
      <Messages />
      <Inputs />
    </div>
  );
};

export default App;
