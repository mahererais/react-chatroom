import { useState } from 'react';
import './Setting.scss';
import { IoSettingsOutline } from 'react-icons/io5';

const Setting = () => {

    const [isHide, setHide] = useState(true);

    const toggle = () => { setHide(prevStat => !prevStat) };

    return (
        <div className='setting_container'>
            <IoSettingsOutline onClick={toggle}/>
            <form className={isHide ? 'hide' : ''} >
                <input type="email" name="email" id="email" placeholder='Entrez votre email'/>
                <input type="password" name="password" id="password" placeholder='Entrez votre mot de passe'/>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
};

export default Setting;