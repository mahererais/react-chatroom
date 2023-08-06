import ReactDOM from "react-dom/client";
import App from "./components/App/App.js";
import "./styles/index.scss";
import { Provider } from "react-redux";
import store from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
