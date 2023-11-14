import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './components/header/NavComponent';
import HomeComponent from './components/home/HomeComponent'
import LoginComponent from './components/user/LoginComponent'
import RegisterComponent from './components/user/RegisterComponent'
import GameControllerComponent from './components/game/GameControllerComponent'

function App() {

    return (
        <div className='App'>

            {/* <NavComponent /> */}

            <Routes>
                <Route path='/' element={<HomeComponent />}></Route>
                <Route path='/users/login' element={<LoginComponent />}></Route>
                <Route path='/users/register' element={<RegisterComponent />}></Route>
                <Route path='/play' element={<GameControllerComponent />}></Route>
            </Routes>
            {/* <LoginComponent /> */}
            {/* <RegisterComponent/> */}
        </div>

    )
}

export default App
