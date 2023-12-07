import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import * as authService from '../services/authSevice';
import usePersisted from "../hooks/usePersisted";
import Paths from '../paths';


const AuthContext = createContext();
export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [authData, setAuthData] = usePersisted('auth', {});

    const loginHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);
            setAuthData(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Paths.Welcome);
            toast.success('Login successful!');
        } catch (err) {
            console.error('Login failed:', err.message);
            toast.error(`Login failed: ${err.message}`);
        };
    };

    const registerHandler = async (values) => {
        try {
            const result = await authService.register(values.email, values.username, values.password);
            setAuthData(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Paths.Welcome);
            toast.success('Registration successful!');
        } catch (err) {
            console.error('Registration failed:', err.message);
            toast.error(`Registation failed: ${err.message}`);
        };
    };

    const logoutHandler = () => {
        setAuthData({});
        localStorage.removeItem('accessToken');
        navigate(Paths.Home)
    };

    const values = {
        loginHandler,
        registerHandler,
        logoutHandler,
        username: authData.username || authData.email,
        email: authData.email,
        userId: authData._id,
        isAuth: !!authData.accessToken
    };

    return (
        <>
            <AuthContext.Provider value={values}>
                {children}
            </AuthContext.Provider>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme=""
            />
        </>
    );
};

export default AuthContext;