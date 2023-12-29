import { Link } from 'react-router-dom';

const EachGame = ({
    _id,
    difficulty,
    title,
    time
}) => {
    return (
        <tr className="border-b border-zinc-700 bg-transparent lg:text-xl md:text-md sm:text-sm min-[320px]:text-[12px]">
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
                    className="bg-transparent text-[#D1D0C5] ml-[-50px] mt-1 py-1 px-4 lg:text-2xl md:text-xl sm:text-md min-[320px]:text-[10px] group border-2 border-black rounded-md border-b-4 border-l-4 hover:bg-amber-300 hover:text-black transition duration-300 ease-in-out transform"
                >
                    Details
                </Link>
            </td>
        </tr>
    );
};

export default EachGame;



