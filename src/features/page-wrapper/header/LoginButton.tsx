import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { useAppDispatch } from '../../../store';
import { clearUserData, getToken, getUserAvatar } from '../../../store/userData';
import { STORAGE_KEYS, clearStorageItem } from '../../../utils/storage';
import s from './header.module.css'; // Путь к вашему файлу стилей

export const LoginButton = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(getToken);
  const avatar = useSelector(getUserAvatar);

  const [params, setParams] = useSearchParams();

  // const onChangeTokenParams = () => {
  //   params.set('token', 'true');
  //   setParams(params);
  // };

  const onDeleteParams = () => {
    params.delete('modal');
    setParams(params);
  };

  const logoutHandler = () => {
    dispatch(clearUserData());
    clearStorageItem(STORAGE_KEYS.USER_DATA);
    onDeleteParams();
  };

  // if (token) onChangeTokenParams();

  
  if (token)
    return (
      <>
        {avatar && <img className={s.avatar} src={avatar} alt="avatar" />}

        <button className={s.newPostButton} onClick={logoutHandler}>
          Выйти
        </button>
      </>
    );

  return (
    <button className={s.newPostButton}>
      Войти
    </button>

    

    // <Link to={ROUTES.ROOT} className={s.newPostButton}>
    //   Войти
    // </Link>
    //   <Link to={ROUTES.AUTH} className={s.newPostButton}>
    //   Войти
    // </Link>
  );
};
