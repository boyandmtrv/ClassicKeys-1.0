import { Link } from 'react-router-dom';
const EachGame = ({
    _id,
    difficulty, 
    title
}) => {
    return (
        <div className="bg-zinc-700 p-10 w-[25rem] h-[22rem] border-2 border-black rounded-md border-b-8 border-l-8">
            <div className="flex font-light text-xl underline mb-5">
                <svg className="h-6 w-6 rotate-90 -ml-2" stroke="#fcd34d">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 15H4" />
                </svg>
                <p>Difficulty level: {difficulty}</p>
            </div>

            <h2 className="font-bold text-3xl mt-2 text-[#D1D0C5] truncate">
                {title}
            </h2>

            <p className="mt-5 text-white text-xl">
                By: <br />
                Game Creator: Username
            </p>

            <Link to={`/games/id/details`} className="bg-amber-300 text-black font-semibold py-1 px-4 text-2xl mt-7 inline-flex items-center group border-2 border-black rounded-md border-b-4 border-l-4">Play</Link>

            <Link to={`/games/${_id}/details`} className="bg-amber-300 text-black font-semibold py-1 px-4 text-2xl mt-7 ml-5 inline-flex items-center group border-2 border-black rounded-md border-b-4 border-l-4 ">Check details</Link>
        </div>
    );
};

export default EachGame;
