import { Link } from 'react-router-dom';

const EachGame = ({
    _id,
    difficulty,
    title,
    time
}) => {
    return (
        <tr className="border-b border-zinc-700 bg-transparent text-xl">
            <td className="p-3 px-5">
                <p>{title}</p>
            </td>
            <td className="p-3 px-5">
                <p>{difficulty}</p>
            </td>
            <td className="p-3 px-5">
                <p>{time}s</p>
            </td>
            <td className="p-3 px-5 flex justify-end">
                <Link
                    to={`/games/${_id}/details`}
                    className="bg-transparent text-[#D1D0C5] mr-5 py-1 px-4 text-2xl group border-2 border-black rounded-md border-b-4 border-l-4 hover:bg-amber-300 hover:text-black transition duration-300 ease-in-out transform"
                >
                    Details
                </Link>
            </td>
        </tr>
    );
};

export default EachGame;



