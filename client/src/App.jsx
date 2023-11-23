import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AuthContext from './contexts/AuthContext';
import * as authService from './services/authSevice';
import Paths from './paths';

import Header from './components/header/Header';
import Home from './components/home/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import GameController from './components/game/gameController';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';
import AllGames from './components/all-games/AllGames';
import GameDetails from './components/game-details/GameDetails';
import Welcome from './components/home/Welcome';
import Logout from './components/user/Logout';


function App() {
    const navigate = useNavigate();
    const [authData, setAuthData] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

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
            <div className='App bg-zinc-800'>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/profile' element={<Welcome />}></Route>
                    <Route path='/play' element={<GameController />}></Route>
                    <Route path="/games" element={<AllGames />}></Route>
                    <Route path='/games/create' element={<Create />}></Route>
                    <Route path='/games/:id/details' element={<GameDetails />}></Route>
                    <Route path='/games/edit' element={<Edit />}></Route>
                    <Route path='/users/login' element={<Login />}></Route>
                    <Route path='/users/register' element={<Register />}></Route>
                    <Route path='/users/logout' element={<Logout />}></Route>
                </Routes>
            </div>
        </AuthContext.Provider>
    )
}

export default App;

