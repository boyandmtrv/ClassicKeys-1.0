import { useState } from 'react';

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
        <div className="w-full h-screen mt-[-112px] flex justify-center items-center bg-zinc-800">
            <div className="flex flex-col items-center justify-center w-[450px] bg-zinc-800 text-white px-[50px] py-10">
                <form onSubmit={submitHandler}>
                    <div className="items-center text-[15px] mb-5">
                        <p className='text-center justify-center'>Made a mistake? Don't worry. You can</p>
                        <button className="text-[#D1D0C5] w-[150px] cursor-pointer ml-[105px] pt-4" type="button" onClick={resetFormHandler}>Reset form</button>
                    </div>
                    <h1 className='text-[50px] text-center mt-[50px]'>Login</h1>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input
                            className='w-full h-full text-[#F5F7F8] bg-zinc-800 border text-base pl-5 pr-10 py-5 rounded-[40px]'
                            type="text"
                            name="username"
                            id="username"
                            value={loginFormValues.username}
                            onChange={changeHandler}
                            placeholder='Username'
                        />
                        <i className='bx bxl-ok-ru absolute -translate-x-2/4 text-xl right-5 top-[30%]'></i>
                    </div>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input
                            className='w-full h-full text-[#F5F7F8] border text-base pl-5 pr-10 py-5 rounded-[40px] bg-zinc-800'
                            type="password"
                            name="password"
                            id="password"
                            value={loginFormValues.password}
                            onChange={changeHandler}
                            placeholder='Password'
                        />
                        <i className='bx bx-lock-alt absolute -translate-x-2/4 text-xl right-5 top-[30%]' ></i>
                    </div>
                    <div>
                        <button className="w-6/12 h-10 border cursor-pointer text-[15px] text-[#fff] ml-[25%] rounded-[40px] border-solid border-[#D1D0C5]" onClick={submitHandler}>Login</button>
                    </div>
                    <div className="text-[15px] text-center mt-[50px] mb-[15px] mx-0">
                        <p>First time using Clikni? You can <a className='text-amber-200 no-underline;' href="/">//Register</a> and test it out</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;