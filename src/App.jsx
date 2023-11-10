import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent'
import LoginComponent from './userComponents/LoginComponent'
import RegisterComponent from './userComponents/RegisterComponent'
import NavComponent from './components/NavComponent';

function App() {

    return (
        <div className='App'>

            <NavComponent />

            <Routes>
                <Route path='/' element={<HomeComponent />}></Route>
                <Route path='/users/login' element={<LoginComponent />}></Route>
                <Route path='/users/register' element={<RegisterComponent />}></Route>
            </Routes>
            {/* <LoginComponent /> */}
            {/* <RegisterComponent/> */}
        </div>

    )
}

export default App
