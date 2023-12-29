import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as gameService from "../../services/gameService";
import AuthContext from "../../contexts/AuthContext";
import { pathToUrl } from "../../utils/namePaths";
import Paths from "../../paths";
import { toast } from 'react-toastify';

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

    const onDeleteButton = async (e) => {
        e.preventDefault();
    
        toast.warning(`By clicking here, you will delete: ${game.title}?`, {
            position: "top-center",
            autoClose: false,
            closeOnClick: true,
            closeButton: true,
            closeOnEscape: true,
            draggable: true,
            progress: undefined,
            onClick: async () => {
                try {
                    await gameService.remove(gameId);
                    navigate('/games');
                    toast.success('Game Deleted');
                } catch (error) {
                    console.error("Error deleting game:", error);
                    toast.error('Error deleting game');
                }
            },
         
        });
    };
    

    const handlePlayClick = () => {
        navigate('/games/user/play', {
            state:
                { userText: game.userText, time: game.time }
        });
    };


    return (
        <div className="flex flex-col items-center w-full justify-center h-screen flex-1 px-20 text-center lg:ml-[0%] md:ml-[0%] sm:ml-[0%] min-[320px]:ml-[-25%]">
            <form className="backdrop-blur shadow-2xl flex lg:w-2/3 md:w-2/3 sm:w-4/5 min-[320px]:w-4/5 lg:max-w-5xl
                md:max-w-3xl sm:max-w-2xl min-[320px]:max-w-xl  border-2 border-black rounded-md border-b-8 border-l-8">
                <div className="lg:w-3/5 md:w-4/5 sm:w-3/5 p-10">
                    <div className="text-left font-bold lg:text-4xl md:text-3xl sm:text-xl text-white">
                        <span className="text-[#D1D0C5]">Game</span> details
                        <div className="border-2 w-10 mt-2 border-amber-300"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <textarea className="text-black bg-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 lg:text-2xl md:text-2xl sm:text-xl min-[320px]:text-sm min-[320px]:h-60 w-full lg:h-80 md:h-60 sm:h-60 p-2 mt-[50px] resize-none placeholder-black scrollbar scrollbar-thumb-gray-900 scrollbar-track-[#D1D0C5]"
                            id="userText"
                            name="userText"
                            type="text"
                            placeholder="Type your words here"
                            value={game.userText}
                        />
                    </div>
                    {isOwner && isAuth && (
                        <div>
                            <Link to={`/games`} className="flex  flex-col justify-center item border-2 border-black rounded-md border-b-4 border-l-4 w-24 h-12 font-black px-2 lg:text-md md:text-sm sm:text-[10px] min-[320px]:text-[10px] text-[#D1D0C5] mt-8">Back</Link>
                            <button
                                onClick={handlePlayClick}
                                className="bg-amber-300 lg:w-32 md:w-48 sm:w-38 min-[320px]:w-24  h-12 flex text-black font-semibold py-1 px-4 lg:text-md md:text-sm sm:text-[10px] min-[320px]:text-[10px] group border-2 border-black rounded-md border-b-4 border-l-4 hover:bg-zinc-800  hover:text-[#D1D0C5] transition duration-300 ease-in-out transform mt-3"
                            >
                                Test Game
                            </button>
                        </div>
                    )}
                </div>
                <div className="lg:w-2/5 md:w-3/5 sm:w-2/5 min-[320px]:w-[100%]  bg-gradient-to-br from-zinc-800 to-zinc-900 text-[#D1D0C5] py-24 px-12">
                    <div className="text-center font-bold lg:text-2xl md:text-xl sm:text-sm">
                        <span className="text-white">Game</span> specs</div>
                    <div className="flex flex-col mt-11">
                        <div className="h-12 lg:w-full md:w-48 sm:w-32 min-[320px]:w-32 lg:text-md sm:text-sm min-[320px]:text-[10px] lg:ml-[0%] md:ml-[0%] sm:ml-[-50%] min-[320px]:ml-[-25%] text-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 bg-zinc-800 pl-2 pt-1 text-2xl">{game.title}</div>
                    </div>
                    <p className="mt-7 lg:text-md">Difficulty:</p>

                    <div className="text-black text-md font-normal justify-center flex gap-2 pt-2 ">
                        <div className="border-2 bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 w-36">{game.difficulty}</div>
                    </div>
                    <p className="mt-7">Time:</p>
                    <div className="text-black text-2xl font-normal justify-center flex pt-2">
                        <div className="border-2 lg:text-xl bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2">{game.time}s</div>

                    </div>

                    {isOwner && (
                        <div className="text-[#D1D0C5] lg:text-xl md:text-xl  sm:text-sm font-normal justify-center flex gap gap-2 pt-10">
                            <Link to={pathToUrl(Paths.Edit, { gameId })} className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10 bg-amber-400 text-[#D1D0C5] pt-1">
                                <span className="drop-shadow-[0_0.1px_1.1px_rgba(0,0,0,10)]">Edit</span>
                            </Link>
                            <button onClick={onDeleteButton} className="button border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10 bg-zinc-800 text-[#D1D0C5]">
                                <span className="drop-shadow-[0_0.1px_1.1px_rgba(0,0,0,10)]">Delete</span></button>

                        </div>
                    )}

                    {!isOwner && isAuth && (
                        <div className="pt-5 lg:text-xl md:text-xl  sm: text-sm">
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

