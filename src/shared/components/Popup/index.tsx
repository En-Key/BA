import { useState } from 'react';

import s from './popup.module.css';

import SignIn from 'shared/components/SighIn';
import SignUp from '../SignUp';

const Popup = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <>
    <div className={s.contain}>
        <div className={s.product}>
            <h2 className={s.title}>
                I Baikal Travel
            </h2>
            <p className={s.tagline}>One Place For All Your Needs</p> 
            <div className={s.linebreak}></div>    
        </div>
        {!toggle && <SignIn handleToggle={setToggle}/>}
        {toggle && <SignUp handleToggle={setToggle}/>}
              
    </div>
    </>
  )    
};

export default Popup;