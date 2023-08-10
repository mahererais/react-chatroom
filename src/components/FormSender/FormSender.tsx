import React, { useState } from "react";
import "./FormSender.scss";
import { useSelector } from "react-redux";

import { BsSend } from "react-icons/bs";

import { AppState } from "../../@types";
import { sendMessageToSocket } from "../../sockets/chatSocket";

const FormSender: React.FC = () => {
  const [inputText, setInputText] = useState("");

  const {email, username, color} = useSelector((state:AppState) => state.auth.connectedUser);

  const handleClick: React.FormEventHandler = (e) => {
    e.preventDefault();


    sendMessageToSocket(
        email && username ? username : "anonyme",
        inputText,
        new Date().getTime(),
        color ?? "dodgerblue",
    );

    setInputText("");
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form className="inputs_container" onSubmit={handleClick}>
      <input
        type="text"
        name="message"
        id="input_text"
        placeholder="Saissez votre message ..."
        value={inputText}
        onChange={onChangeHandler}
      />
      <button type="submit">
        <BsSend />
      </button>
    </form>
  );
};

export default FormSender;
