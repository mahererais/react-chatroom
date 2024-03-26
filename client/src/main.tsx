import ReactDOM from "react-dom/client";
import Chat from "./components/Chat/Chat.js";
import "./styles/index.scss";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Chat />
  </Provider>
);
