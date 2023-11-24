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
        <div className="bg-zinc-700 p-10 w-[25rem] h-[25rem] border-2 border-black rounded-md border-b-8 border-l-8 flex flex-col justify-center text-white pt-11">
            <div className="flex font-light text-2xl mb-5 border-b-2 border-black">
                <p>Difficulty level: {difficulty}</p>
            </div>

            <h2 className="font-bold text-3xl mt-2 text-[#D1D0C5] truncate border-b-2 border-black">
                Title: {title}
            </h2>

            <p className="mt-5 text-white text-3xl border-b-2 border-black ">
                Game Creator: check
            </p>

            <div className="flex mt-10">
                <Link to={`/games/${_id}/details`} className="bg-amber-300 text-black font-semibold py-1 px-4 text-2xl group border-2 border-black rounded-md border-b-4 border-l-4 mr-8">
                    Check details
                </Link>
                <Link to={`/games/${_id}/details`} className="bg-amber-300 text-black font-semibold py-1 px-4 text-2xl group border-2 border-black rounded-md border-b-4 border-l-4">
                    Play
                </Link>
            </div>
        </div>
    );
};

export default EachGame;
