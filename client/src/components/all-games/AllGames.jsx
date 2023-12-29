import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import EachGame from "./each-game/EachGame";
import * as gameService from '../../services/gameService';

const AllGames = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result))
            .catch((err) => console.log(err))
    }, []);

    return (
        <div className="text-gray-900 backdrop-blur  w-full h-screen">
            <div className="p-4 flex justify-center">
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl min-[320px]:text-2xl text-amber-300 lg:mt-[5%] md:mt-[5%] sm:mt-[10%] min-[320px]:mt-[20%]">
                    All Created Games
                </h1>
            </div>
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-transparent text-white shadow-md rounded mb-4">
                    <tbody>
                        <tr className="border-b border-zinc-700 lg:text-xl md:text-md sm:text-sm min-[320px]:text-[11px] text-[#D1D0C5]">
                            <th
                                className="text-left p-3 px-5">Game title
                            </th>
                            <th
                                className="text-left p-3 px-5">Difficulty Level
                            </th>
                            <th
                                className="text-left p-3 px-5">Time in seconds
                            </th>
                        </tr>
                        {
                            games.map(game => (
                                <EachGame key={game._id} {...game} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {games.length === 0 && (
                <div className="flex flex-col justify-center items-center mt-[10%] m-[20%]">
                    <p className="text-white lg:text-6xl md:text-5xl sm:text-4xl mb-4">
                        No games added, would you like to be the first one?
                    </p>
                    <Link
                        to={`/games/create`}
                        className="bg-amber-300 text-black font-semibold py-1 px-4 text-2xl group border-2 border-black mt-5 rounded-md border-b-4 border-l-4 hover:bg-zinc-800 hover:text-[#D1D0C5] transition duration-300 ease-in-out transform"
                    >
                        Create game
                    </Link>
                </div>
            )}
        </div>
    );
};

export default AllGames;


