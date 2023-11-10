import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import HomeComponent from './components/HomeComponent'
import LoginComponent from './userComponents/LoginComponent'
import RegisterComponent from './userComponents/RegisterComponent'
import GameControllerComponent from './gameComponents/GameControllerComponent'

function App() {

    return (
        <div className='App'>

            <NavComponent />

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
