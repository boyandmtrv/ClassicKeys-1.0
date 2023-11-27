import { useContext, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';


const RegisterFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    RepeatPassword: 'repeatPassword'
};

const RegisterComponent = () => {

    const { registerHandler } = useContext(AuthContext);
    const { values, onChangeHandler, onSubmitHandler } = useForm(registerHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RepeatPassword]: '',
    });

    return (

        <div className="w-full h-screen mt-[-88px] flex justify-center items-center bg-zinc-800">
            <div className="flex flex-col items-center justify-center w-[450px] bg-zinc-800 text-white px-[50px] py-10 border-2 border-black rounded-md border-b-8 border-l-8">
                <form onSubmit={onSubmitHandler}>
                    <h1 className='text-[50px] text-center mt-[50px] text-[#D1D0C5]'>Register</h1>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input
                            className='w-full h-full text-[#F5F7F8] bg-zinc-800 
                            text-xl pl-5 pr-10 py-5 border-2 border-black rounded-md border-b-8 border-l-8'
                            type="email"
                            name="email"
                            id="email"
                            value={values[RegisterFormKeys.Email]}
                            onChange={onChangeHandler}
                            placeholder='E-mail'
                        />
                        <i className='bx bx-envelope  absolute -translate-x-2/4 text-xl right-5 top-[15%] text-[#D1D0C5]'></i>
                    </div>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input
                            className='w-full h-full text-[#F5F7F8] bg-zinc-800 
                            text-xl pl-5 pr-10 py-5 border-2 border-black rounded-md border-b-8 border-l-8'
                            type="text"
                            name="username"
                            id="username"
                            value={values[RegisterFormKeys.Username]}
                            onChange={onChangeHandler}
                            placeholder='Username'
                        />
                        <i className='bx bxl-ok-ru absolute -translate-x-2/4 text-xl right-5 top-[15%] text-[#D1D0C5]'></i>
                    </div>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input
                            className='w-full h-full text-[#F5F7F8] bg-zinc-800 
                            text-xl pl-5 pr-10 py-5 border-2 border-black rounded-md border-b-8 border-l-8'
                            type="password"
                            name="password"
                            id="password"
                            value={values[RegisterFormKeys.Password]}
                            onChange={onChangeHandler}
                            placeholder='Password'
                        />
                        <i className='bx bx-lock-alt absolute -translate-x-2/4 text-xl right-5 top-[15%] text-[#D1D0C5]' ></i>
                    </div>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input
                            className='w-full h-full text-[#F5F7F8] bg-zinc-800 
                            text-xl pl-5 pr-10 py-5 border-2 border-black rounded-md border-b-8 border-l-8'
                            type="password"
                            name="repeatPassword"
                            id="repeatPassword"
                            value={values[RegisterFormKeys.RepeatPassword]}
                            onChange={onChangeHandler}
                            placeholder='Repeat password'
                        />
                        <i className='bx bx-key  absolute -translate-x-2/4 text-xl right-5 top-[15%] text-[#D1D0C5]' ></i>
                    </div>
                    <div>
                        <button className="w-6/12 h-10 cursor-pointer text-[15px]  ml-[25%] border-2 border-black rounded-md border-b-4 border-l-4 text-[#D1D0C5] transition duration-300 ease-in-out transform hover:bg-amber-300 hover:text-black" onClick={onSubmitHandler}>Register</button>
                    </div>
                    <div className="text-[15px] text-center mt-[50px] mb-[15px] mx-0">
                        <p>Already in the club?<Link to='/users/login' className='text-amber-200 no-underline'> //Sign in</Link> and continue the training</p>
                    </div>
                </form>
            </div>
        </div>


    )
};

export default RegisterComponent;