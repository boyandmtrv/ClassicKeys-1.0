import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = (props) => {

    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to='/users/login' />
    };

    return <Outlet />
};

export default AuthGuard;