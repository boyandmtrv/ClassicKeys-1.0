import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RegisterFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    RepeatPassword: 'repeatPassword'
};

const RegisterComponent = () => {

    const { registerHandler } = useContext(AuthContext);
    const { values, onChangeHandler } = useForm(registerHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RepeatPassword]: '',
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const { email, username, password, repeatPassword } = values;

        if (password !== repeatPassword) {
            console.log('Password mismatch');
            toast.error('Password mismatch');
        } else if (email.length < 5) {
            console.log('Email too short');
            toast.error('Email must be at least 5 characters long.');
        } else if (password.length < 6) {
            console.log('Password too short');
            toast.error('Password must be at least 6 characters long.');
        } else if (username.length < 3) {
            console.log('Username too short');
            toast.error('Username must be at least 3 characters long.');
        } else {
            try {
                await registerHandler(values);
            } catch (error) {
                console.log('Registration failed:', error.message);
                toast.error(`Registration failed: ${error.message}`);
            }
        }
    };

    return (

        <div className="w-full h-screen mt-[-112px] flex justify-center items-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <div className="flex flex-col items-center justify-center w-[450px] bg-gradient-to-br from-zinc-900 to-zinc-800 text-white px-[50px] py-10 border-2 border-black rounded-md border-b-8 border-l-8">
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
                            required
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
                            required
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
                            required={true}
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
                            required
                        />
                        <i className='bx bx-key  absolute -translate-x-2/4 text-xl right-5 top-[15%] text-[#D1D0C5]' ></i>
                    </div>
                    <div>
                        <button className="w-6/12 h-10 cursor-pointer text-[15px]  ml-[25%] border-2 border-black rounded-md border-b-4 border-l-4 text-[#D1D0C5] transition duration-300 ease-in-out transform hover:bg-amber-300 hover:text-black" onClick={onSubmitHandler}>Register</button>
                    </div>
                    <div className="text-[15px] text-center mt-[50px] mb-[15px] mx-0">
                        <p>Already in the <span className='text-[#D1D0C5]'>club</span>?<Link to='/users/login' className='text-amber-200 no-underline'> //Sign in</Link> and continue the training</p>
                    </div>
                </form>
            </div>
        </div>


    )
};

export default RegisterComponent;