import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generate } from 'random-words'
import * as gameService from "../../services/gameService";
import wordHelpers from '../../utils/wordUtils';

const Create = () => {
    
    const navigate = useNavigate();

    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleDifficultyClick = (difficulty) => {
        setSelectedDifficulty(difficulty === selectedDifficulty ? null : difficulty);
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time === selectedTime ? null : time);
    };

    const createGameSubmitHandler = async (e) => {

        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await gameService.create(gameData)

            navigate('/games')
        } catch (err) {
            console.log(err);
        };

    };

    function generateRandomWords() {
        const words = new Array(wordHelpers.NUMBER_OF_WORDS).fill(null).map(() => generate());
        const sentence = words.join(' ');

        document.getElementById('userText').value = sentence;
        return words;
    };

    return (
        <div className="flex flex-col mt-[-112px] items-center w-full justify-center h-screen flex-1 px-20 text-center">
            <form className="bg-zinc-700 shadow-2xl flex w-2/3 max-w-5xl  border-2 border-black rounded-md border-b-8 border-l-8" onSubmit={createGameSubmitHandler}>
                <div className="w-3/5 p-10">
                    <div className="text-left font-bold text-5xl text-white">
                        <span className="text-[#D1D0C5]">Create</span> your game
                        <div className="border-2 w-10 mt-2 border-amber-300"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <textarea className="text-black bg-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 text-3xl w-full h-80 p-2 mt-[50px] resize-none placeholder-black"
                            id="userText"
                            name="userText"
                            type="text"
                            placeholder="Type your words here"
                        />
                    </div>
                    <button className="border-2 border-black rounded-md border-b-4 border-l-4 w-64 h-12 font-black px-2 mt-10 text-2xl text-[#D1D0C5]" onClick={generateRandomWords}>Generate random sentence</button>
                </div>
                <div className="w-2/5 bg-zinc-800 text-[#D1D0C5] py-24 px-12">
                    <div className="text-center font-bold text-4xl">
                        <span className="text-white">Specify</span> the game
                    </div>
                    <div className="flex flex-col mt-11">
                        <input className="h-12 text-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 bg-zinc-800 pl-2 placeholder-[#D1D0C5] text-2xl" type="text"
                            id="title"
                            name="title"
                            placeholder="Game name"
                        />
                    </div>
                    <p className="mt-7 text-xl">Difficulty:</p>

                    <div className="text-black text-2xl font-normal justify-center flex gap-2 pt-2">
                        <select
                            className={`border-2 bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 w-36 ${selectedDifficulty ? 'bg-amber-400 text-black' : ''}`}
                            id="difficulty"
                            name="difficulty"
                            value={selectedDifficulty || ''}
                            onChange={(e) => handleDifficultyClick(e.target.value)}
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>

                    </div>
                    <p className="mt-7">Time:</p>
                    <div className="text-black text-2xl font-normal justify-center flex gap gap-2 pt-2">

                        <select
                            className={`border-2 bg-zinc-800 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 w-36 ${selectedTime ? 'bg-amber-400 text-black' : ''}`}
                            id="time"
                            name="time"
                            value={selectedTime || ''}
                            onChange={(e) => handleTimeClick(e.target.value)}
                        >
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="60">60</option>
                        </select>
                    </div>
                    <div className="text-[#D1D0C5] text-2xl font-normal justify-center flex gap gap-2 pt-10">
                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10 bg-amber-400 text-[#D1D0C5]" type="submit" value="Create Game"><span className="drop-shadow-[0_0.1px_1.1px_rgba(0,0,0,10)]">Create</span>
                        </button>
                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10">Cancel</button>
                    </div>

                </div>
            </form >
        </div >
    )
};

export default Create;


// #D1D0C5