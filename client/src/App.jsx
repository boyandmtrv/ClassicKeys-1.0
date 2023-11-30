import './App.css';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Header from './components/header/Header';
import Home from './components/home/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import GameController from './components/game/playGame/GameController';
import UserPlayGame from './components/game/userGame/UserGameController';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';
import AllGames from './components/all-games/AllGames';
import GameDetails from './components/game-details/GameDetails';
import Welcome from './components/home/Welcome';
import Logout from './components/user/Logout';
import Paths from './paths';
import ErrorBoundary from './errors/ErrorBoundry';
import AuthGuard from './guards/AuthGuard';
import About from './components/about/About';


function App() {

    return (
        <ErrorBoundary>
            <AuthProvider>
                <div className='App bg-zinc-800'>
                    <Header />

                    <Routes>
                        <Route path={Paths.Home} element={<Home />}></Route>
                        <Route path={Paths.AllGames} element={<AllGames />}></Route>
                        <Route path={Paths.Details} element={<GameDetails />}></Route>
                        <Route path={Paths.Login} element={<Login />}></Route>
                        <Route path={Paths.Register} element={<Register />}></Route>
                        <Route path={Paths.About} element={<About />}></Route>

                        <Route element={<AuthGuard />}>
                            <Route path={Paths.Create} element={<Create />}></Route>
                            <Route path={Paths.Edit} element={<Edit />}></Route>
                            <Route path={Paths.Logout} element={<Logout />}></Route>
                            <Route path={Paths.Welcome} element={<Welcome />}></Route>
                            <Route path={Paths.Play} element={<GameController />}></Route>
                            <Route path={Paths.UserPlay} element={<UserPlayGame />}></Route>
                           
                        </Route>
                    </Routes>
                </div>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App;
