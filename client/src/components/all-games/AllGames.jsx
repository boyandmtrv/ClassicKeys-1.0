import { useEffect, useState } from "react";
import * as gameService from '../../services/gameService';
import EachGame from "./each-game/EachGame";


const AllGames = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => setGames(result))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div className="flex flex-wrap justify-start h-screen px-20 bg-[zinc-800] ml-5">

      {games.map(game => (
        <EachGame key={game._id} {...game} />
      ))}

      {games.length === 0 && <p>No games added</p>}


    </div>
  )
};

export default AllGames;
