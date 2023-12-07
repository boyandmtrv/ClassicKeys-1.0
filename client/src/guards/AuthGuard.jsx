import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";

const AuthGuard = () => {

    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to='/users/login' />
    };

    return <Outlet />
};

export default AuthGuard;