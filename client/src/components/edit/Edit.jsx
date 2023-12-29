import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from 'react-toastify';

import * as gameService from '../../services/gameService';

import AuthContext from "../../contexts/AuthContext";

const Edit = () => {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({
        userText: '',
        title: '',
        difficulty: '',
        time: ''
    });

    const { username } = useContext(AuthContext);

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                setGame(result)
            })
    }, [gameId]);

    const editGameSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await gameService.edit(gameId, values)
            navigate('/games')
            toast.success('Game edited')
        } catch (err) {
            console.log(err);
        };

    };

    const onChangeHandler = (e) => {
        setGame(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };


    return (
        <div className="flex flex-col items-center w-full justify-center h-screen flex-1 px-20 text-center lg:ml-[0%] md:ml-[0%] sm:ml-[0%] min-[320px]:ml-[-25%]">
            <form
                className="backdrop-blur shadow-2xl flex lg:w-2/3 md:w-2/3 sm:w-4/5 min-[320px]:w-4/5 lg:max-w-5xl
                md:max-w-3xl sm:max-w-2xl min-[320px]:max-w-xl  border-2 border-black rounded-md border-b-8 border-l-8"
                onSubmit={editGameSubmitHandler}>
                <div className="lg:w-3/5 md:w-4/5 sm:w-3/5 p-10">
                    <div className="text-left font-bold lg:text-4xl md:text-3xl sm:text-xl text-[#D1D0C5]">
                        <span
                            className="text-white">You are in
                        </span> editing mode, {username}
                        <div className="border-2 w-10 mt-2 border-amber-300"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <textarea
                            className="text-black bg-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 lg:text-2xl md:text-2xl sm:text-xl min-[320px]:text-sm min-[320px]:h-60 w-full lg:h-80 md:h-60 sm:h-60 p-2 mt-[50px] resize-none placeholder-black scrollbar scrollbar-thumb-gray-900 scrollbar-track-[#D1D0C5]"
                            id="userText"
                            name="userText"
                            type="text"
                            value={game.userText}
                            onChange={onChangeHandler}
                            placeholder="Type your words here"
                        />
                    </div>
                    <Link to={`/games`}
                        className="flex flex-col justify-center item border-2 border-black rounded-md border-b-4 border-l-4 lg:w-48 md:w-48 sm:w-38 min-[320px]:w-24 h-12 font-black px-2 lg:text-md md:text-sm sm:text-[10px] min-[320px]:text-[10px] text-[#D1D0C5] mt-8">
                        Back
                    </Link>
                </div>
                <div className="lg:w-2/5 md:w-3/5 sm:w-2/5 min-[320px]:w-[100%] bg-gradient-to-br from-zinc-800 to-zinc-900 text-[#D1D0C5] py-24 px-12">
                    <div className="text-center font-bold lg:text-2xl md:text-xl sm:text-sm">
                        <span
                            className="text-white">
                            Change
                        </span> the game
                    </div>
                    <div className="flex flex-col mt-11">
                        <input
                            className="h-12 lg:w-full md:w-48 sm:w-32 min-[320px]:w-32 text-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 bg-zinc-800 pl-2 placeholder-[#D1D0C5] lg:text-md sm:text-sm lg:ml-[0%] md:ml-[0%] sm:ml-[-50%]  min-[320px]:ml-[-25%]"
                            type="text"
                            id="title"
                            name="title"
                            value={game.title}
                            onChange={onChangeHandler}
                            placeholder="Game name"
                        />
                    </div>
                    <p className="mt-7 lg:text-md">
                        Difficulty:
                    </p>
                    <div className="text-black lg:text-xl font-normal justify-center flex gap-2 pt-2">
                        <select
                            className={`border-2 bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 w-36 `}
                            id="difficulty"
                            name="difficulty"
                            value={game.difficulty}
                            onChange={onChangeHandler}
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <p className="mt-7">
                        Seconds:
                    </p>
                    <div className="text-black lg:text-xl font-normal justify-center flex gap gap-2 pt-2">
                        <select
                            className={`border-2 bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 w-36 `}
                            id="time"
                            name="time"
                            value={game.time}
                            onChange={onChangeHandler}
                        >
                            <option value="10">10s</option>
                            <option value="15">15s</option>
                            <option value="30">30s</option>
                        </select>
                    </div>
                    <div className="text-[#D1D0C5] lg:text-xl md:text-xl  sm:text-sm font-normal justify-center flex gap gap-2 pt-10">
                        <button
                            className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10 bg-amber-400 text-[#D1D0C5]"
                            type="submit"
                            value="Create Game">
                            <span
                                className="drop-shadow-[0_0.1px_1.1px_rgba(0,0,0,10)]">
                                Save
                            </span>
                        </button>
                        <button
                            className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10">
                            Cancel
                        </button>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default Edit;
