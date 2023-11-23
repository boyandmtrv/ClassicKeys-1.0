import { useContext, useEffect } from "react";
import * as authService from '../../services/authSevice';
import { useNavigate } from "react-router-dom";
import Paths from "../../paths";
import AuthContext from "../../contexts/AuthContext";

const Logout = () => {

    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => logoutHandler())
            .catch(() => navigate(Paths.Home));
    }, []);

    return null;

};

export default Logout;