import { useState } from "react";

const Create = () => {

    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleDifficultyClick = (difficulty) => {
        setSelectedDifficulty(difficulty === selectedDifficulty ? null : difficulty);
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time === selectedTime ? null : time);
    };

    return (
        <div className="flex flex-col mt-[-112px] items-center w-full justify-center h-screen flex-1 px-20 text-center">
            <div className="bg-zinc-700 shadow-2xl flex w-2/3 max-w-5xl  border-2 border-black rounded-md border-b-8 border-l-8">
                <div className="w-3/5 p-10">
                    <div className="text-left font-bold text-5xl text-white">
                        <span className="text-[#D1D0C5]">Create</span> your game
                        <div className="border-2 w-10 mt-2 border-amber-300"></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <textarea className="text-black bg-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 text-3xl w-full h-80 p-2 mt-[50px] resize-none placeholder-black" type="text" placeholder="Type your words here" />
                    </div>
                    <button className="border-2 border-black rounded-md border-b-4 border-l-4 w-64 h-12 font-black px-2 mt-10 text-2xl text-[#D1D0C5]">Generate random sentence</button>
                </div>
                <div className="w-2/5 bg-zinc-800 text-[#D1D0C5] py-24 px-12">
                    <div className="text-center font-bold text-4xl">
                        <span className="text-white">Specify</span> the game
                    </div>
                    <div className="flex flex-col mt-11">
                        <input className="h-12 text-[#D1D0C5] border-2 border-black rounded-md border-b-4 border-l-4 bg-zinc-800 pl-2 placeholder-[#D1D0C5] text-2xl" type="text" placeholder="Game name" />
                    </div>
                    <p className="mt-7">Difficulty:</p>
                    <div className="text-black text-2xl font-normal justify-center flex gap-2 pt-2">
                        <button
                            className={`border-2 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 ${selectedDifficulty === 'easy' ? 'bg-[#D1D0C5] text-black' : ''
                                }`}
                            onClick={() => handleDifficultyClick('easy')}
                        >
                            Easy
                        </button>
                        <button
                            className={`border-2 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 ${selectedDifficulty === 'medium' ? 'bg-[#D1D0C5] text-black' : ''
                                }`}
                            onClick={() => handleDifficultyClick('medium')}
                        >
                            Medium
                        </button>
                        <button
                            className={`border-2 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 ${selectedDifficulty === 'hard' ? 'bg-[#D1D0C5] text-black' : ''
                                }`}
                            onClick={() => handleDifficultyClick('hard')}
                        >
                            Hard
                        </button>

                    </div>
                    <p className="mt-7">Time:</p>
                    <div className="text-black text-2xl font-normal justify-center flex gap gap-2 pt-2">
                        <button
                            className={`border-2 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 ${selectedTime === 15 ? 'bg-[#D1D0C5] text-black' : ''
                                }`}
                            onClick={() => handleTimeClick(15)}
                        >
                            15
                        </button>
                        <button
                            className={`border-2 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 ${selectedTime === 30 ? 'bg-[#D1D0C5] text-black' : ''
                                }`}
                            onClick={() => handleTimeClick(30)}
                        >
                            30
                        </button>
                        <button
                            className={`border-2 border-black text-[#D1D0C5] rounded-md border-b-4 border-l-4 font-black px-2 ${selectedTime === 60 ? 'bg-[#D1D0C5] text-black' : ''
                                }`}
                            onClick={() => handleTimeClick(60)}
                        >
                            60
                        </button>
                    </div>
                    <div className="text-[#D1D0C5] text-2xl font-normal justify-center flex gap gap-2 pt-10">
                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10 text-[#D1D0C5]">Create 
                        </button>
                        <button className="border-2 border-black rounded-md border-b-4 border-l-4 w-36 h-12 font-black px-2 mt-10">Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Create;


// #D1D0C5