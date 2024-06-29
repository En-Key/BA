import s from './modalpopup.module.css';

import { useState } from 'react';

import SignIn from 'shared/components/SighIn';
import SignUp from '../SignUp';

import { AiOutlineClose } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';

// import { Transition } from "react-transition-group";

const ModalPopup = ({ isOpen, onClose }: any) => {
  
  const [params, setParams] = useSearchParams();

  const onDeleteParams = () => {
    params.delete('modal');
    setParams(params);
  };

  const onWrapperClick = (e: any) => {
    if (e.target.classList.contains(s.modal_container)) {
      // onClose();
      onDeleteParams();
    }
  };

  const [toggle, setToggle] = useState(false);

  return (
    <>
      {isOpen && (
        <div className={s.modal}>
          <div className={s.modal_container} onClick={onWrapperClick}>
            <div className={s.contain}>
              <button className={s.modal_close_button} onClick={() => onClose()}>
                <AiOutlineClose />
              </button>
              <div className={s.product}>
                <h2 className={s.title}>Baikal Travel</h2>
                <p className={s.tagline}>The Heart Of Siberia</p>
                <div className={s.linebreak}></div>
              </div>
              {!toggle && <SignIn handleToggle={setToggle} />}
              {toggle && <SignUp handleToggle={setToggle} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPopup;
