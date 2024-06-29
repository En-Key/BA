import { AiOutlineClose } from 'react-icons/ai';
import s from './modal.module.css';

// import { Transition } from "react-transition-group";

const Modal = ({ isOpen, onClose, children }: any) => {
  const onWrapperClick = (e: any) => {
    if (e.target.classList.contains(s.modal_container)) onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={s.modal}>

          <div className={s.modal_container} onClick={onWrapperClick}>
            <div className={s.modal_body}>
              <button className={s.modal_close_button} onClick={() => onClose()}>
              <AiOutlineClose />
              </button>
              {children}
            </div>
          </div>  
        </div>
      )}
    </>
  );
};

export default Modal;
