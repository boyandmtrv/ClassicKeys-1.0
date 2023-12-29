import { useContext } from "react";
import { useSpring, animated } from 'react-spring';

import AuthContext from "../../../contexts/AuthContext";

const UserEndGame = ({
    correctWord,
    incorrectWord,
    onRetake,
}) => {

    const acc = (Math.round((correctWord / (correctWord + incorrectWord)) * 100));

    const wpm = (((((correctWord) + acc) / 5) / 0.45)).toFixed(2);

    let textToShow;

    if (acc === 100) {
        textToShow = 'Brilliant play'
    } else if (acc >= 90 && acc < 100) {
        textToShow = 'Stunning one'
    } else if (acc >= 80 && acc < 90) {
        textToShow = 'Fantastic'
    } else if (acc >= 70 && acc < 80) {
        textToShow = 'Awesome play'
    } else if (acc >= 60 && acc < 70) {
        textToShow = 'Nice one'
    } else if (acc >= 50 && acc < 60) {
        textToShow = 'Good job'
    } else {
        textToShow = 'Keep practice'
    };

    const { username } = useContext(AuthContext);

    const headerProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 200,
    });

    const statsProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 700,
    });

    const buttonsProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 1000,
    });

    const linkStyle =
        "flex flex-col items-center justify-center border-2 border-black rounded-md border-b-8 border-l-8 text-[#D1D0C5] w-80 h-16 p-2 mb-5 transition duration-300 ease-in-out transform hover:bg-amber-300 hover:text-black";

    return (
        <div className="w-full h-screen flex bg-transparent">
            <div className="lg:w-[50%] lg:h-screen md:lg:w-[50%] md:h-screen sm:w-[90%] min-[320px]:w-[90%] h-screen from-zinc-800 to-zinc-900">
                <animated.h1
                    className="translate-x-2/4 translate-y-[-50] lg:mt-[25%] md:mt-[30%] sm:mt-[50%] min-[320px]:mt-[100%] lg:ml-[0%] md:ml-[0%] sm:ml-[50%] min-[320px]:ml-[20%] lg:text-[120px] md:text-[80px] sm:text-[55px] min-[320px]:text-[30px] text-white"
                    style={headerProps}>
                    <span className="text-black tracking-tighter">
                        <div className="text-white">{textToShow}, {username}</div>
                    </span>
                    <div className="lg:text-3xl md:text-2xl sm:text-xl min-[320px]:text-sm lg:ml-[180px] md:ml-[50px] sm:ml-[30px] min-[320px]:ml-[5px] text-[#D1D0C5]">
                        <div className="flex space-x-4 mt-10">
                            <animated.button
                                className={linkStyle}
                                onClick={onRetake}
                                style={buttonsProps}>
                                Try again
                            </animated.button>
                        </div>
                    </div>
                </animated.h1>
            </div>
            <div className="lg:w-[45%] md:w-[40%] sm:w-[40%] min-[320px]:w-[10%] h-screen from-zinc-800 to-zinc-900 flex flex-col justify-center items-center">
                <animated.div
                    className="w-full h-[75%] flex lg:flex-col md:flex-col sm:flex-row items-center justify-between mt-10 lg:ml-[700px] md:ml-[400px] sm:mr-[650px] min-[320px]:mr-[550px] lg:mt-[0%] md:mt-[0%] sm:mt-[100%] min-[320px]:mt-[200px] text-gray-500 lg:text-3xl md:text-2xl sm:text-2xl lg:space-y-4 md:space-y-4 sm:space-x-8 min-[320px]: space-x-4" style={statsProps}>
                    <div className="flex flex-col">
                        <p>Correct Words:</p>
                        <p className="text-amber-300 lg:text-9xl md:text-8xl">
                            {correctWord}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p>Incorrect Words:</p>
                        <p className="text-amber-300 lg:text-9xl md:text-8xl">
                            {incorrectWord}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p>Accuracy:</p>
                        <p className="text-amber-300 lg:text-9xl md:text-8xl">
                            {acc}%
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p>WPM:</p>
                        <p className="text-amber-300 lg:text-9xl md:text-8xl">
                            {wpm}
                        </p>
                    </div>
                </animated.div>
            </div>
        </div>
    );
};

export default UserEndGame;
