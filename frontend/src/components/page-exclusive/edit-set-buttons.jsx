import EditSetButtonsCSS from './edit-set-buttons.module.css'
import { Link } from 'react-router-dom';

const EditSetButtons = () => {
    return (
        <div >          
          <Link to = "/profile/edit" className={EditSetButtonsCSS.button1}>Edit profile</Link>
          <Link to = "/profile/settings" className={EditSetButtonsCSS.button2}>Settings</Link>    
        </div>
     );
}
 
export default EditSetButtons;