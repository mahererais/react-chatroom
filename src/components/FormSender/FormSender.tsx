import React, { useState } from "react";
import "./FormSender.scss";
import { useDispatch } from "react-redux";

import { BsSend } from "react-icons/bs";

import * as ChatAction from '../../redux/action/chatAction';

const FormSender: React.FC = () => {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const handleClick: React.FormEventHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: "chat/newMessage",
      payload: {
        author: "Super Chat",
        message: inputText,
        time: new Date().getTime(),
      },
    });

    dispatch(ChatAction.incrementCount());
    dispatch(ChatAction.updateTimeStamp());


    setInputText("");
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  }

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
