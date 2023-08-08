import './Setting.scss';
import { IoSettingsOutline } from 'react-icons/io5';

const Setting = () => {

    return (
        <div className='setting_container'>
            <IoSettingsOutline />
            <form>
                <input type="email" name="email" id="email" placeholder='Entrez votre email'/>
                <input type="password" name="password" id="password" placeholder='Entrez votre mot de passe'/>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
};

export default Setting;