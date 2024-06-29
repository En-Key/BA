import s from './signin.module.css';
import clsx from 'clsx';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { getIsLoading, getToken } from '../../../store/userData';
import { postAuthData } from '../../../store/userData/effects';
import { AuthFormData } from '../../../store/userData/types';
import { useSearchParams } from 'react-router-dom';

const SighIn = ({ handleToggle }: any) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getIsLoading);
  const token = useSelector(getToken);

  const [inputs, setInputs] = useState<AuthFormData>({ email: '', password: '' });
  const [isError, setIsError] = useState(false);

  const [params, setParams] = useSearchParams();

  const onDeleteParams = () => {
    params.delete('modal');
    setParams(params);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
    //  setInputs({...inputs, [name]: value});
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (inputs.email.length <= 3 || inputs.password.length <= 3) {
      setIsError(true);
      e.preventDefault();
      return;
    } else {
      setIsError(false);
      e.preventDefault();
      dispatch(postAuthData(inputs));
      onDeleteParams();
      console.log('Form submitted');

    }
    // e.preventDefault();
    // dispatch(postAuthData(inputs));
    // console.log('Form submitted');
    // onDeleteParams();
  };

  //   if (token) return <Navigate to={ROUTES.ROOT} />;

  console.log('auth render');

  return (
    <>
      <form onSubmit={e => handleSubmit(e)} className={s.form}>
        <div className={isError ? s.form_message_error : s.form_message}>Некорректное Имя или Пароль</div>
        <div className={s.form_input_group}>
          <input
            type="text"
            name="email"
            value={inputs.email}
            className={clsx(s.form_input, { [s.error]: isError })}
            // className={s.form_input}
            placeholder="Имя или Email"
            autoFocus
            onChange={e => handleChange(e)}
          />
        </div>
        {/* <div className={s.form_message}>Incorrect Username or Password</div> */}
        <div className={s.form_input_group}>
          <input
            type="password"
            name="password"
            value={inputs.password}
            className={s.form_input}
            placeholder="Пароль"
            onChange={e => handleChange(e)}
          />
        </div>

        <div className={s.form_input_group}>
          <button className={s.form_button} type="submit" disabled={isLoading}>
            {isLoading ? 'Обработка данных...' : 'Войти'}
          </button>
          <div className={s.form_text_group}>
            <span className={s.form_text}>Забыли пароль?</span>
            <span className={s.form_text} onClick={() => handleToggle(true)}>
              Нет аккаунта? Создайте здесь
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default SighIn;

// const handleChange = (e: any) => {
//     const {name, value} = e.target;

//     setInputs({...inputs, [name]: value})

//     // if (e.target.name === 'username') {
//     //     setInputs({...inputs, username: e.target.value})
//     // }
//     // if (e.target.name === 'password') {
//     //     setInputs({...inputs, password: e.target.value})
//     // }
// };

// const handleSubmit = (e: any) => {
//     console.log('Form submitted');
//     if (inputs.username !=='codamy') {
//         setIsError(true);
//     }
//     else {
//         setIsError(false);
//     }
//     e.preventDefault();
// };
