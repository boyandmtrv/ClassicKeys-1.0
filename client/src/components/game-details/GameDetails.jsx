import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as gameService from "../../services/gameService";
import AuthContext from "../../contexts/AuthContext";
import { pathToUrl } from "../../utils/namePaths";
import Paths from "../../paths";


const GameDetails = () => {

    const navigate = useNavigate();
    const { gameId } = useParams();
    const { userId } = useContext(AuthContext)
    const [game, setGame] = useState({});

    const {
        isAuth,
    } = useContext(AuthContext)

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => setGame(result))
    }, [gameId]);

    const isOwner = userId === game._ownerId;
    console.log(userId);

    const onDeleteButton = async (e) => {
        e.preventDefault();

        const hasConfirmed = confirm(`Are you sure you want to delete ${game.title}?`);

        if (hasConfirmed) {
            try {
                await gameService.remove(gameId);
                navigate('/games');
            } catch (error) {
                console.error("Error deleting game:", error);
            }
        }
    };

    const handlePlayClick = () => {
        navigate('/games/user/play', {
            state:
                { userText: game.userText, time: game.time }
        });
    };


    return (
        <div className="flex flex-col mt-[-112px] items-center w-full justify-center h-screen flex-1 px-20 text-center">
            <form className="bg-zinc-700 shadow-2xl flex w-2/3 max-w-5xl  border-2 border-black rounded-md border-b-8 border-l-8">
                <div className="w-3/5 p-10">
                    <div className="text-left font-bold text-5xl text-white">
                        <span className="text-[#D1D0C5]">Game</span> details
                        <div className="border-2 w-10 mt-2 border-amber-300"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <textarea className="text-black bg-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 text-3xl w-full h-80 p-2 mt-[50px] resize-none placeholder-black scrollbar scrollbar-thumb-gray-900 scrollbar-track-[#D1D0C5]"
                            id="userText"
                            name="userText"
                            type="text"
                            placeholder="Type your words here"
                            value={game.userText}
                        />
                    </div>
                    {isOwner && isAuth && (
                        <div>
                            <Link to={`/games`} className="flex flex-col justify-center item border-2 border-black rounded-md border-b-4 border-l-4 w-24 h-12 font-black px-2 text-2xl text-[#D1D0C5] mt-8">Back</Link>
                            <button
                                onClick={handlePlayClick}
                                className="bg-amber-300 flex text-black font-semibold py-1 px-4 text-2xl group border-2 border-black rounded-md border-b-4 border-l-4 hover:bg-zinc-800  hover:text-[#D1D0C5] transition duration-300 ease-in-out transform mt-3"
                            >
                                Test your game
                            </button>
                        </div>
                    )}
                </div>
                <div className="w-2/5 bg-zinc-800 text-[#D1D0C5] py-24 px-12">
                    <div className="text-center font-bold text-4xl">
                        <span className="text-white">Game</span> specs</div>
                    <div className="flex flex-col mt-11">
                        <div className="h-12 text-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 bg-zinc-800 pl-2 pt-1 text-2xl">{game.title}</div>
                    </div>
                    <p className="mt-7 text-xl">Difficulty:</p>

                    <div className="text-black text-2xl font-normal justify-center flex gap-2 pt-2">
                        <div className="border-2 bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 w-36">{game.difficulty}</div>
                    </div>
                    <p className="mt-7">Time:</p>
                    <div className="text-black text-2xl font-normal justify-center flex pt-2">
                        <div className="border-2 bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2">{game.time}s</div>

                    </div>

                    {isOwner && (
                        <div className="text-[#D1D0C5] text-2xl font-normal justify-center flex gap gap-2 pt-10">
                            <Link to={pathToUrl(Paths.Edit, { gameId })} className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10 bg-amber-400 text-[#D1D0C5] pt-1">
                                <span className="drop-shadow-[0_0.1px_1.1px_rgba(0,0,0,10)]">Edit</span>
                            </Link>
                            <button onClick={onDeleteButton} className="button border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10 bg-zinc-800 text-[#D1D0C5]">
                                <span className="drop-shadow-[0_0.1px_1.1px_rgba(0,0,0,10)]">Delete</span></button>

                        </div>
                    )}

                    {!isOwner && isAuth && (
                        <div className="pt-5">
                            <button
                                onClick={handlePlayClick}
                                className="bg-amber-300 text-black font-semibold py-1 px-4 text-2xl group border-2 border-black rounded-md border-b-4 border-l-4 hover:bg-zinc-800 mb-5 hover:text-[#D1D0C5] transition duration-300 ease-in-out transform"
                            >
                                Play
                            </button>
                        </div>
                    )}
                </div>
            </form >
        </div >
    )
};

export default GameDetails;

