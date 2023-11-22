import { useEffect, useState } from "react";
import * as gameService from '../../services/gameService';
import EachGame from "./each-game/EachGame";

const AllGames = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result));
    }, []);

    console.log(games);

    return (
        <div className="flex flex-wrap mt-[-112px] justify-start min-h-screen flex-1 px-20 bg-zinc-800 pt-[150px] gap-10 ml-5">

          {games.map(game => (
            <EachGame key={game._id} {...game}/>
          ))}

          {games.length === 0 && <p>No games added</p>}
        

        </div>
    )
};

export default AllGames;
