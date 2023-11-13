import { useState } from 'react';
import styles from './LoginRegisterComponent.module.css';

const loginFormState = {
    username: '',
    password: '',
};

const LoginComponent = () => {

    const [loginFormValues, setLoginFormValues] = useState(loginFormState);

    const changeHandler = (e) => {
        setLoginFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };


    const resetFormHandler = () => {
        setLoginFormValues(loginFormState)
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(loginFormValues);

        resetFormHandler();
    };

    return (
        <div className={styles.authPage}>
            <div className={styles.authContainer}>
                <form onSubmit={submitHandler}>
                    <div className={styles.resetContainer}>
                        <p>Made a mistake? Don't worry. You can</p>
                        <button className={styles.authResetButton} type="button" onClick={resetFormHandler}>Reset form</button>
                    </div>
                    <h1>Login</h1>
                    <div className={styles.authInput}>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={loginFormValues.username}
                            onChange={changeHandler}
                            placeholder='Username'
                        />
                        <i className='bx bxl-ok-ru'></i>
                    </div>
                    <div className={styles.authInput}>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={loginFormValues.password}
                            onChange={changeHandler}
                            placeholder='Password'
                        />
                        <i className='bx bx-lock-alt' ></i>
                    </div>
                    <div>
                        <button className={styles.authButton} onClick={submitHandler}>Login</button>
                    </div>
                    <div className={styles.registerInputLink}>
                        <p>First time using Clikni? You can <a href="/">Register</a> and test it out</p>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default LoginComponent;