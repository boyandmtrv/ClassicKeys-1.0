import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';

import Home from './components/home/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import GameController from './components/game/gameController';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';
import AllGames from './components/all-games/AllGames';
import GameDetails from './components/game-details/GameDetails';
import AuthContext from './contexts/authContext';

function App() {

    const [authData, setAuthData] = useState({});

    const loginHandler = (values) => {
        console.log(values);
    };

    return (
        <AuthContext.Provider value={{ loginHandler }}>
            <div className='App bg-zinc-800'>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/play' element={<GameController />}></Route>
                    <Route path="/games" element={<AllGames />}></Route>
                    <Route path='/games/create' element={<Create />}></Route>
                    <Route path='/games/:id/details' element={<GameDetails />}></Route>
                    <Route path='/games/edit' element={<Edit />}></Route>
                    <Route path='/users/login' element={<Login />}></Route>
                    <Route path='/users/register' element={<Register />}></Route>
                </Routes>
            </div>
        </AuthContext.Provider>
    )
}

export default App;

