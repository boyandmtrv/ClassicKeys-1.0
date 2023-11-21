const EndGame = ({
    correctWord,
    incorrectWord,
    onRefresh,
    onRetake
}) => {
    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="flex space-x-10 mb-4" >
                <div className="w-72 h-72 border-4 border-amber-300 rounded-full flex flex-col items-center justify-center text-white text-2xl">
                    <p>Correct Words:</p>
                    <p>{correctWord}</p>
                </div>
                <div className="w-72 h-72 border-4 border-amber-300 rounded-full flex flex-col items-center justify-center text-white text-2xl">
                    <p>Incorrect Words:</p>
                    <p>{incorrectWord}</p>
                </div>
                <div className="w-72 h-72 border-4 border-amber-300  rounded-full flex flex-col items-center justify-center text-white text-2xl">
                    <p>Accuracy:</p>
                    {Math.round((correctWord / (correctWord + incorrectWord)) * 100)}%
                </div>
            </div>
            <div className="flex space-x-4 mt-10">
                <button className="w-48 h-16 px-4 py-2 border-4 border-amber-50 rounded-full text-white text-xl" onClick={onRefresh}>Refresh</button>
                <button className="w-48 h-16 only:px-4 py-2 border-4 border-amber-50 rounded-full text-white text-xl" onClick={onRetake}>Re-take Test</button>
            </div>
        </div>
    );
};

export default EndGame;
