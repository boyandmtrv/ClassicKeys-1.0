import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
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
        const result = await authService.login(values.email, values.password);

        setAuthData(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Paths.Welcome)
        
    };

    const registerHandler = async (values) => {
        const result = await authService.register(values.email, values.username, values.password);

        setAuthData(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Paths.Welcome)      
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
        isAuth: !!authData.accessToken
    };


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;