import React, { useState } from "react";
import "./FormSender.scss";
import { useDispatch, useSelector } from "react-redux";

import { BsSend } from "react-icons/bs";

import * as ChatAction from "../../redux/action/chatAction";
import { AppState } from "../../@types";
import { sendMessage } from "../../sockets/chatSocket";

const FormSender: React.FC = () => {
  const [inputText, setInputText] = useState("");

  const {email, username, color} = useSelector((state:AppState) => state.auth.connectedUser);

  const dispatch = useDispatch();

  const handleClick: React.FormEventHandler = (e) => {
    e.preventDefault();

    // dispatch({
    //   type: "chat/newMessage",
    //   payload: {
    //     author: "Super Chat",
    //     message: inputText,
    //     time: new Date().getTime(),
    //   },
    // });
    // = c'est l'equivalent de la ligne au dessus
    // dispatch(
    //   ChatAction.newMessage({
    //     author: email && username ? username : "anonyme",
    //     message: inputText,
    //     time: new Date().getTime(),
    //     color: color ?? "dodgerblue",
    //   })
    // );
    sendMessage(
        email && username ? username : "anonyme",
        inputText,
        new Date().getTime(),
        color ?? "dodgerblue",
    );

    dispatch(ChatAction.incrementCount());
    dispatch(ChatAction.updateTimeStamp());

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
