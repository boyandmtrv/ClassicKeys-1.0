import { useContext, useState } from 'react';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';


const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

const LoginComponent = () => {

    const { loginHandler } = useContext(AuthContext);
    const { values, onChangeHandler, onSubmitHandler } = useForm(loginHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    const linkStyle =
    "flex items-center justify-center border-2 border-black rounded-md border-b-4 border-l-4 text-[#D1D0C5] w-16 h-16 p-2";


    return (
        <div className="w-full h-screen mt-[-112px] flex justify-center items-center bg-zinc-800">
            <div className="flex flex-col items-center justify-center w-[450px] bg-zinc-800 text-white px-[50px] py-10 border-2 border-black rounded-md border-b-8 border-l-8">
                <form onSubmit={onSubmitHandler}>
                    <h1 className='text-[50px] text-center mt-[50px]'>Login</h1>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input
                            className='w-full h-full text-[#F5F7F8] bg-zinc-800 
                            text-xl pl-5 pr-10 py-5 border-2 border-black rounded-md border-b-8 border-l-8'
                            type="email"
                            name={LoginFormKeys.Email}
                            id="email"
                            value={values[LoginFormKeys.Email]}
                            onChange={onChangeHandler}
                            placeholder='Email'
                        />
                        <i className='bx bxl-ok-ru absolute -translate-x-2/4 text-xl right-5 top-[15%]'></i>
                    </div>
                    <div className="relative w-full h-[50px] mx-0 my-[30px]">
                        <input
                            className='w-full h-full text-[#F5F7F8] bg-zinc-800 
                            text-xl pl-5 pr-10 py-5 border-2 border-black rounded-md border-b-8 border-l-8'
                            type="password"
                            name={LoginFormKeys.Password}
                            id="password"
                            value={values[LoginFormKeys.Password]}
                            onChange={onChangeHandler}
                            placeholder='Password'
                        />
                        <i className='bx bx-lock-alt absolute -translate-x-2/4 text-xl right-5 top-[15%]' ></i>
                    </div>
                    <div>
                        <button className="w-6/12 h-10 border cursor-pointer text-[15px] text-[#fff] ml-[25%] rounded-[40px] border-solid border-[#D1D0C5]" onClick={onSubmitHandler}>Login</button>
                    </div>
                    <div className="text-[15px] text-center mt-[50px] mb-[15px] mx-0">
                        <p>First time using Clikni? You can<Link to='/users/register' className='text-amber-200 no-underline'> //Sign up</Link>  and test it out</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;