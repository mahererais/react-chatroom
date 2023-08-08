import React, { useState } from 'react';
import './Setting.scss';
import { IoSettingsOutline } from 'react-icons/io5';

const Setting = () => {

    const [isHide, setHide] = useState(true);

    const onClick = () => { 
        setHide(prevStat => !prevStat) 
    };
    const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => { 
        e.preventDefault();
        
        
     };

    return (
        <div className='setting_container'>
            <IoSettingsOutline onClick={onClick}/>
            <form className={isHide ? 'hide' : ''} onSubmit={onSubmit} >
                <input type="email" name="email" id="email" placeholder='Entrez votre email'/>
                <input type="password" name="password" id="password" placeholder='Entrez votre mot de passe'/>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
};

export default Setting;