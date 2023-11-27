import { useState, useEffect, useContext } from "react";
import wordHelpers from '../../utils/wordUtils';
import AuthContext from "../../contexts/AuthContext";
import { Link } from "react-router-dom";


const EndGame = ({
    correctWord,
    incorrectWord,
    onRefresh,
    onRetake
}) => {

    const acc = `${ Math.round((correctWord / (correctWord + incorrectWord)) * 100) } %`;

    const linkStyle =
        "flex flex-col items-center justify-center border-2 border-black rounded-md border-b-8 border-l-8 text-[#D1D0C5] w-80 h-16 p-2 mb-5 transition duration-300 ease-in-out transform hover:bg-amber-300 hover:text-black";

    const { username } = useContext(AuthContext)

    return (
        <div className="w-full h-screen bg-zinc-800 flex">
            <div className="w-[50%] h-screen bg-zinc-800">
                <h1 className="translate-x-2/4 translate-y-[-50] mt-[30%] text-[150px] text-white">
                    <span className="text-black tracking-tighter">
                        <div className="text-white">Great job, {username}</div>
                    </span>
                    <div className="text-3xl ml-[50px] text-[#D1D0C5]">
                        <div className="flex space-x-4 mt-10">
                            <button className={linkStyle} onClick={onRefresh}>Refresh Test</button>
                            <button className={linkStyle} onClick={onRetake}>Re-take Test</button>
                        </div>
                    </div>

                </h1>
            </div>
            <div className="w-[50%] h-screen bg-zinc-800 flex flex-col justify-center items-center">
                <div className="w-full h-[75%] flex flex-col items-center justify-between mt-10 ml-[40%] text-gray-500 text-3xl space-y-4">
                    <div className="flex flex-col">
                        <p>Correct Words:</p>
                        <p className="text-amber-300 text-9xl jus">{correctWord}</p>
                    </div>
                    <div className="flex flex-col">
                        <p>Incorrect Words:</p>
                        <p className="text-amber-300 text-9xl">{incorrectWord}</p>
                    </div>
                    <div className="flex flex-col">
                        <p>Accuracy:</p>
                        <p className="text-amber-300 text-9xl">{acc}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default EndGame;
