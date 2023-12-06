import { useEffect, useState } from "react";
import * as gameService from '../../services/gameService';
import EachGame from "./each-game/EachGame";
import { Link } from "react-router-dom";

const AllGames = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => setGames(result))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div className="text-gray-900 bg-gradient-to-br from-zinc-800 to-zinc-900 w-full h-screen">
      <div className="p-4 flex justify-center mt-[-112px]">
        <h1 className="text-5xl text-amber-300 mt-[5%]">
          All Created Games
        </h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-transparent text-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b border-zinc-700 text-2xl text-[#D1D0C5]">
              <th className="text-left p-3 px-5">Game title</th>
              <th className="text-left p-3 px-5">Difficulty Level</th>
              <th className="text-left p-3 px-5">Time in seconds</th>
              <th></th>
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
          <p className="text-white text-6xl mb-4">No games added, would you like to be the first one?</p>
          <Link
            to={`/games/create`}
            className="bg-amber-300 text-black font-semibold py-1 px-4 text-2xl group border-2 border-black mt-5 rounded-md border-b-4 border-l-4 hover:bg-zinc-800 hover:text-[#D1D0C5] transition duration-300 ease-in-out transform"
          >
            Create game
          </Link>
        </div>
      )}
    </div>
  )
};

export default AllGames;


