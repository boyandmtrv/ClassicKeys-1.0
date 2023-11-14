import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import Home from './components/home/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import GameController from './components/game/GameController';

function App() {

    return (
        <div className='App'>

            <Nav/>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/users/login' element={<Login />}></Route>
                <Route path='/users/register' element={<Register />}></Route>
                <Route path='/play' element={<GameController />}></Route>
            </Routes>
            {/* <Login /> */}
            {/* <Register/> */}
        </div>

    )
}

export default App
