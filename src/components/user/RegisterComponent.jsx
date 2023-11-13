import { useState } from 'react';
import styles from './LoginRegisterComponent.module.css';

const registerStateForm = {
    email: '',
    username: '',
    password: '',
    repeatPassword: ''
};

const RegisterComponent = () => {

    const [registerFormValues, setRegisterFormValues] = useState(registerStateForm);

    const changeHandler = (e) => {
        setRegisterFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };


    const resetFormHandler = () => {
        setRegisterFormValues(registerStateForm)
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(registerFormValues);

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
                    <h1>Register</h1>

                    <div className={styles.authInput}>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={registerFormValues.email}
                            onChange={changeHandler}
                            placeholder='E-mail'
                        />
                        <i className='bx bx-envelope'></i>
                    </div>
                    <div className={styles.authInput}>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={registerFormValues.username}
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
                            value={registerFormValues.password}
                            onChange={changeHandler}
                            placeholder='Password'
                        />
                        <i className='bx bx-lock-alt' ></i>
                    </div>
                    <div className={styles.authInput}>
                        <input
                            type="password"
                            name="repeatPassword"
                            id="repeatPassword"
                            value={registerFormValues.repeatPassword}
                            onChange={changeHandler}
                            placeholder='Repeat password'
                        />
                        <i className='bx bx-key' ></i>
                    </div>
                    <div>
                        <button className={styles.authButton} onClick={submitHandler}>Register</button>
                    </div>
                    <div className={styles.registerInputLink}>
                        <p>Already experinced Clickni? <a href="/">Login</a> and continue the journey</p>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default RegisterComponent;