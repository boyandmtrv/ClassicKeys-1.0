import { useState } from 'react';
import styles from './LoginComponent.module.css';

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
        <>
            <h1>Login</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={loginFormValues.username}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={loginFormValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <button onClick={submitHandler}>Login</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </>
    );
};

export default LoginComponent;