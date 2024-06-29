import clsx from 'clsx';
import LikeIcon from 'assets/icons/Logo.svg';
import logo from 'assets/images/Logo_for_a_website_about_Lake_Baikal.png';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import s from './header.module.css';
import { FaBars } from 'react-icons/fa';
import { RiAccountCircleLine, RiAccountCircleFill } from 'react-icons/ri';
import { IoSearchOutline } from 'react-icons/io5';
import { Link, useSearchParams } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import ModalPopup from 'shared/components/ModalPopup';
import { DarkModeButton } from 'shared/components/DarkModeButton';
import { LoginButton } from './LoginButton';
import { PiSignIn } from 'react-icons/pi';

export const Header = ({ onSearchChange }: { onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);
  const [params, setParams] = useSearchParams();

  const onChangeParams = () => {
    params.set('modal', 'auth');
    setParams(params);
  };

  // const onDeleteParams = () => {
  //   params.delete('modal');
  //   setParams(params);
  // };

  const toggleOpenSearchBar = () => {
    setIsOpenSearchBar(isOpenSearchBar === true ? false : true);
  };

  //  if (params.get('modal') !== 'auth') return null;

  const getParams = params.get('modal');

  // const getTokenParams = params.get('token');

  let isTokenExists;

  useEffect(() => {
    if (getParams === 'auth') {
      setModalOpen(true);
    } else setModalOpen(false);
  }, [getParams]);

  // if (getTokenParams === 'true') {
  //   isTokenExists=true;
  // } else {
  //   isTokenExists=false;
  // }

  return (
    <header className={s.headerContainer}>
      <div className={s.leftSection}>
        <button className={s.burgerButton}>
          <FaBars />
        </button>
        <Link to={ROUTES.ROOT} className={s.logo}>
          <img className={s.logo_img} src={logo} alt="logo" />
          <span className={s.logo_span}>Baikal Travel</span>
        </Link>
        <DarkModeButton />
      </div>
      <div className={s.centerSection}>
        <Link to={ROUTES.ROOT} className={s.centerSection_title}>
          <span className={s.logo_span}>BAIKAL TRAVEL</span>
        </Link>
        {isOpenSearchBar && (
          <input type="text" placeholder="Поиск..." className={s.searchInput} onChange={onSearchChange} />
        )}
        {/* <button className={s.newPostButton}>Новый пост</button> */}
      </div>
      <div className={s.rightSection}>
        <ul className={s.header_nav_list}>
          <div className={s.searchSign}>{/* <IoSearchOutline onClick={() => toggleOpenSearchBar()} /> */}</div>
          <Link to={ROUTES.MAP} className={s.header_nav_item}>
            КАРТА
          </Link>
          <Link to={ROUTES.SIGHTS} className={s.header_nav_item}>
            МЕСТА
          </Link>
          <Link to={ROUTES.GALLERY} className={s.header_nav_item}>
            ГАЛЕРЕЯ
          </Link>
        </ul>
        <div className={s.login_button} onClick={onChangeParams}>
          <LoginButton />
        </div>
        <div className={s.login_sign} onClick={onChangeParams}>
          <PiSignIn />
        </div>

        <ModalPopup isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </header>
  );
};

{
  /* <div onClick={onOpenModal}>
          <LoginButton />
        </div> */
}

{
  /* <LoginButton /> */
}

{
  /* {isTokenExists && <LoginButton />}
        {!isTokenExists && <div onClick={onChangeParams}>
          <LoginButton />
        </div>} */
}

{
  /* <button className={s.avatar} onClick={() => setModalOpen(true)}>
          <RiAccountCircleLine />
        </button> */
}

{
  /* <button className={s.avatar} onClick={() => onChangeParams()}>
          <RiAccountCircleLine />
        </button> */
}

{
  /* <button onClick={onChangeParams}>Set params</button>

        <button onClick={onDeleteParams}>Delete params</button> */
}

{
  /* <ModalPopup/> */
}

{
  /* <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}>
                <h2>Аккаунт</h2>
                <p>Войдите в свой аккаунт</p>
            </ Modal > */
}
