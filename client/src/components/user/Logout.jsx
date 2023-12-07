import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../../services/authSevice';

import Paths from "../../paths";

import AuthContext from "../../contexts/AuthContext";

const Logout = () => {

    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate(Paths.Home);
            })
            .catch(() => {
                logoutHandler();
                navigate(Paths.Home);
            });
    }, []);

    return null;
};

export default Logout;