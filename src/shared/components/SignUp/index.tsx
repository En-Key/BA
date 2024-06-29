import { useState } from 'react';
import s from './signup.module.css';
import clsx from 'clsx';

const SighUp = ({handleToggle}: any) => {

    const [inputs, setInputs] = useState({name: "", username: "", password: "", confirmPassword: ""});

    const [isError, setIsError] = useState(false);

    const handleChange = (e: any) => {

        const {name, value} = e.target;
        setInputs({...inputs, [name]: value})
        // if (e.target.name === 'name') {
        //     setInputs({...inputs, name: e.target.value})
        // }
        // if (e.target.name === 'username') {
        //     setInputs({...inputs, username: e.target.value})
        // }
        // if (e.target.name === 'password') {
        //     setInputs({...inputs, password: e.target.value})
        // }
        // if (e.target.name === 'confirmPassword') {
        //     setInputs({...inputs, confirmPassword: e.target.value})
        // }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        if (inputs.name !== 'codamy' && inputs.password !== 'codamy') {
            setIsError(true);
        }
        else {
            setIsError(false);
        }
        console.log('Form submitted');
    };

  return (
    <>
        <form onSubmit={(e) => handleSubmit(e)} className={s.form}>
            <div className={isError ? s.form_message_error : s.form_message}>Некорректное Имя или Пароль</div>
            <div className={s.form_input_group}>
                <input type="text"
                name='name' 
                value={inputs.name}
                className={clsx(s.form_input, { [s.error] : isError})}
                // className={s.form_input}
                placeholder='Ваше Имя'
                autoFocus
                onChange={(e) => handleChange(e)}/>
            </div>

            <div className={s.form_input_group}>
                <input type="text"
                name='username' 
                value={inputs.username}
                className={s.form_input}
                placeholder='Имя или Email'
                onChange={(e) => handleChange(e)}/>
            </div>

            {/* <div className={s.form_message}>Incorrect Username or Password</div> */}
            <div className={s.form_input_group}>
                <input type="password"
                name='password'
                value={inputs.password}
                className={s.form_input} 
                placeholder='Пароль'
                onChange={(e) => handleChange(e)}/>
            </div>

            <div className={s.form_input_group}>
                <input type="password"
                name='confirmPassword'
                value={inputs.confirmPassword}
                className={s.form_input} 
                placeholder='Подтвердите Пароль'
                onChange={(e) => handleChange(e)}/>
            </div>

            <div className={s.form_input_group}>
                <button className={s.form_button}>Зарагистрироваться</button>
                <div className={s.form_text_group}>
                    {/* <span className={s.form_text}>Forget your password?</span> */}
                    <span className={s.form_text} onClick={() => handleToggle(false)}>Уже есть аккаунт? Войдите здесь</span>
                </div>
            </div>  
        </form>
    </>
  );
};

export default SighUp;