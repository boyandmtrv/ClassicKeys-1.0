import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/AuthContext';

const EachGame = ({
  _id,
  difficulty,
  title
}) => {
  const { username } = useContext(AuthContext);

  return (
    <div className="bg-zinc-700 p-10 w-full h-32 border-2 border-black rounded-md border-b-8 border-l-8 flex flex-row flex-wrap justify-between items-center text-white mb-4">
      <div className="flex flex-row">
        <div className="font-light text-xl">
          <p>Difficulty level: {difficulty}</p>
        </div>
        <h2 className="font-bold text-xl text-[#D1D0C5]">
          Title: {title}
        </h2>
        <p className="text-white text-xl">
          Game Creator: {username}
        </p>
      </div>

      <div className="flex flex-row items-center justify-center space-x-4">
        <Link
          to={`/games/${_id}/details`}
          className="bg-amber-300 text-black font-semibold py-1 px-4 text-2xl group border-2 border-black rounded-md border-b-4 border-l-4"
        >
          Check details
        </Link>
        <Link
          to={`/games/${_id}/details`}
          className="bg-amber-300 text-black font-semibold py-1 px-4 text-2xl group border-2 border-black rounded-md border-b-4 border-l-4"
        >
          Play
        </Link>
      </div>
    </div>
  );
};

export default EachGame;
