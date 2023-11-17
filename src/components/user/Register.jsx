import { useState } from 'react';

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

        <div className="w-full h-screen flex justify-center items-center bg-zinc-800">
            <div className="flex flex-col items-center justify-center w-[450px] bg-zinc-800 text-white px-[50px] py-10">
                <form onSubmit={submitHandler}>
                    <div className="items-center text-[15px] mb-5">
                        <p className='text-center justify-center'>Made a mistake? Don't worry. You can</p>
                        <button className="text-amber-200 w-[150px] cursor-pointer ml-[105px] pt-4" type="button" onClick={resetFormHandler}>Reset form</button>
                    </div>
                    <h1 className='text-[50px] text-center mt-[50px]'>Register</h1>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input
                            className='w-full h-full text-[#F5F7F8] bg-zinc-800 border text-base pl-5 pr-10 py-5 rounded-[40px]'
                            type="email"
                            name="email"
                            id="email"
                            value={registerFormValues.email}
                            onChange={changeHandler}
                            placeholder='E-mail'
                        />
                        <i className='bx bx-envelope  absolute -translate-x-2/4 text-xl right-5 top-[30%]'></i>
                    </div>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input
                            className='w-full h-full text-[#F5F7F8] bg-zinc-800 border text-base pl-5 pr-10 py-5 rounded-[40px]'
                            type="text"
                            name="username"
                            id="username"
                            value={registerFormValues.username}
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
                            value={registerFormValues.password}
                            onChange={changeHandler}
                            placeholder='Password'
                        />
                        <i className='bx bx-lock-alt absolute -translate-x-2/4 text-xl right-5 top-[30%]' ></i>
                    </div>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input
                            className='w-full h-full text-[#F5F7F8] bg-zinc-800 border text-base pl-5 pr-10 py-5 rounded-[40px]'
                            type="password"
                            name="repeatPassword"
                            id="repeatPassword"
                            value={registerFormValues.repeatPassword}
                            onChange={changeHandler}
                            placeholder='Repeat password'
                        />
                        <i className='bx bx-key  absolute -translate-x-2/4 text-xl right-5 top-[30%]' ></i>
                    </div>
                    <div>
                        <button className="w-6/12 h-10 border cursor-pointer text-[15px] text-[#fff] ml-[25%] rounded-[40px] border-solid border-amber-200" onClick={submitHandler}>Register</button>
                    </div>
                    <div className="text-[15px] text-center mt-[50px] mb-[15px] mx-0">
                        <p>Already in the club?<a className='text-amber-200 no-underline' href="/"> //Sign in</a> and continue the training</p>
                    </div>
                </form>
            </div>
        </div>


    )
};

export default RegisterComponent;