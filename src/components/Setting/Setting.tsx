import React, { useCallback, useState } from "react";
import "./Setting.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { connectAction } from "../../redux/action/authAction";
import { AppDispach } from "../../redux/store";


const Setting = () => {
  const [displayModal, setDisplayModal] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: AppDispach = useDispatch();

  const onClick = useCallback(() => {
    setDisplayModal((prevStat) => !prevStat);
  }, []);

  // const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // fetch('http://localhost:3001/login', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify( {
    //     email: email,
    //     password: password,
    //   })
    // })
    //   .then ( response =>  response.json())
    //   .then (data => {
    //     console.log(data);

    //   })
    //   .catch(error => console.error(error));

    
      
    dispatch(connectAction({email, password}));

  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => {
    setPassword((e.target as HTMLInputElement).value);
  }

  return (
    <div className="setting_container">
      <IoSettingsOutline onClick={onClick} style={{transform: displayModal ? 'rotate(120deg)': 'rotate(0deg)'}}/>
      <form className={displayModal ? "hide" : ""} onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Entrez votre email"
          required
          value={email}
          onChange={handleEmailChange}
          onPaste={handleEmailChange}
          onCut={handleEmailChange}
          onCopy={handleEmailChange}
          />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Entrez votre mot de passe"
          required
          value={password}
          onChange={handlePasswordChange}
          onPaste={handlePasswordChange}
          onCut={handlePasswordChange}
          onCopy={handlePasswordChange}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Setting;
