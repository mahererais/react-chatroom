import React from "react";
import './Inputs.scss';
import { useDispatch } from "react-redux";

import { BsSend } from 'react-icons/bs';

const Inputs: React.FC = () => {

    const dispath = useDispatch();

    const handleClick:React.MouseEventHandler = (e) => {
        e.preventDefault();
        const text = (document.getElementById("input_text") as HTMLInputElement).value;
        dispath({
            type: "message/new",
            payload: {
                author: "Super Chat", 
                message: text
            }
        });
        (document.getElementById("input_text") as HTMLInputElement).value = ""
    }

    return (
        <form className="inputs_container">
           <input type="text" name="message" id="input_text" placeholder="Saissez votre message ..." />
           <button onClick={handleClick}><BsSend /></button>
        </form>
    )
}


export default Inputs;