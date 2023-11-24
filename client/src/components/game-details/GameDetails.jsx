import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as gameService from "../../services/gameService";
import AuthContext from "../../contexts/AuthContext";
import { pathToUrl } from "../../utils/namePaths";
import Paths from "../../paths";

const GameDetails = () => {

    const { id } = useParams();
    const { userId, username } = useContext(AuthContext)
    const [game, setGame] = useState({});

    useEffect(() => {
        gameService.getOne(id)
            .then(result => setGame(result))
    }, [id]);

    const isOwner = userId === game._ownerId;

    return (
        <div className="flex flex-col mt-[-112px] items-center w-full justify-center h-screen flex-1 px-20 text-center">
            <form className="bg-zinc-700 shadow-2xl flex w-2/3 max-w-5xl  border-2 border-black rounded-md border-b-8 border-l-8">
                <div className="w-3/5 p-10">
                    <div className="text-left font-bold text-5xl text-white">
                        <span className="text-[#D1D0C5]">Game</span> details
                        <div className="border-2 w-10 mt-2 border-amber-300"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-black bg-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 text-3xl w-full h-80 p-2 mt-[50px] p=t">{game.userText}</div>
                    </div>

                    <Link to={`/games`} className="flex flex-col justify-center item border-2 border-black rounded-md border-b-4 border-l-4 w-24 h-12 font-black px-2 text-2xl text-[#D1D0C5] mt-8">Back</Link>

                </div>
                <div className="w-2/5 bg-zinc-800 text-[#D1D0C5] py-24 px-12">
                    <div className="text-center font-bold text-4xl">
                        <span className="text-white">check's</span> game
                    </div>
                    <div className="flex flex-col mt-11">
                        <div className="h-12 text-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 bg-zinc-800 pl-2 pt-1 text-2xl">{game.title}</div>
                    </div>
                    <p className="mt-7 text-xl">Difficulty:</p>

                    <div className="text-black text-2xl font-normal justify-center flex gap-2 pt-2">
                        <div className="border-2 bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 w-36">{game.difficulty}</div>
                    </div>
                    <p className="mt-7">Time:</p>
                    <div className="text-black text-2xl font-normal justify-center flex pt-2">
                        <div className="border-2 bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2">{game.time}</div>

                    </div>
                    {isOwner && (
                        <div className="text-[#D1D0C5] text-2xl font-normal justify-center flex gap gap-2 pt-10">
                            <Link to={pathToUrl(Paths.Edit, { id })} className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10 bg-amber-400 text-[#D1D0C5] pt-1">
                                <span className="drop-shadow-[0_0.1px_1.1px_rgba(0,0,0,10)]">Edit</span>
                            </Link>
                            <Link to='/games/:id/details/delete' className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10 bg-zinc-800 text-[#D1D0C5] pt-1">
                                <span className="drop-shadow-[0_0.1px_1.1px_rgba(0,0,0,10)]">Delete</span>
                            </Link>

                        </div>
                    )}

                </div>
            </form >
        </div >
    )
};

export default GameDetails;

