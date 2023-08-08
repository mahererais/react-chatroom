import "./Chat.scss";
import Inputs from "../FormSender/FormSender";

import Messages from "../Messages/Messages";
import Setting from "../Setting/Setting";

const App = () => {
  

  return (
    <div id="chat">
      <Setting />
      <Messages />
      <Inputs />
    </div>
  );
};

export default App;
