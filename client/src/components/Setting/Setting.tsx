import React, { useCallback, useState } from "react";
import "./Setting.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { connectAction, disableLoadingAction, disconnectAction } from "../../redux/action/authAction";
import { AppDispach } from "../../redux/store";
import { AppState } from "../../@types";

import {RiLogoutCircleRFill} from "react-icons/ri";


const Setting = () => {
  const [displayModal, setDisplayModal] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {email: userEmail, username: userName} = useSelector((state: AppState) => {
      return state.auth.connectedUser;
  });
  // == loading.io/css
  const isLoading = useSelector((state: AppState) => {
    return state.auth.isLoadind;
  });

  const dispatch: AppDispach = useDispatch();

  const onClick = useCallback(() => {
    setDisplayModal((prevStat) => !prevStat);
  }, []);

  // const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      
    dispatch(connectAction({email, password}));
    setTimeout(() => {
      dispatch(disableLoadingAction());
    }, 1500);

  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value.toLowerCase());
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => {
    setPassword((e.target as HTMLInputElement).value);
  }

  const handleDisconnect = () => {
    dispatch(disconnectAction());
  }

  const displayPicker = () => {
    if (isLoading) {
      return (
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
      );
    }

    if (!userEmail && !userName) {
      return (
        <>
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
                </>
      );
    }

    return (
        <>
          <h5>{userName}</h5>
          <h5>{userEmail}</h5>
          <RiLogoutCircleRFill id="logout_btn" onClick={handleDisconnect}/>
        </>
    );

  }

  return (
    <div className="setting_container" style={{ gap: userEmail && userName ? '0rem' : '2rem' }}>
      {displayPicker()}
    </div>
  );
};

export default Setting;
