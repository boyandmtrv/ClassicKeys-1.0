import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import GameController from './components/game/gameController';

function App() {

    return (
        <div className='App bg-zinc-800'>
            <Header />

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/users/login' element={<Login />}></Route>
                <Route path='/users/register' element={<Register />}></Route>
                <Route path='/play' element={<GameController />}></Route>
            </Routes>
        </div>

    )
}

export default App
