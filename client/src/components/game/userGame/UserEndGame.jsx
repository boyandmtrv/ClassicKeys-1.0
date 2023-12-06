import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { useSpring, animated } from 'react-spring';

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

    const linkStyle =
        "flex flex-col items-center justify-center border-2 border-black rounded-md border-b-8 border-l-8 text-[#D1D0C5] w-80 h-16 p-2 mb-5 transition duration-300 ease-in-out transform hover:bg-amber-300 hover:text-black";

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

    return (
        <div className="w-full h-screen from-zinc-800 to-zinc-900 flex">
            <div className="w-[50%] h-screen from-zinc-800 to-zinc-900">
                <animated.h1 className="translate-x-2/4 translate-y-[-50] mt-[25%] text-[120px] text-white" style={headerProps}>
                    <span className="text-black tracking-tighter">
                        <div className="text-white">{textToShow}, {username}</div>
                    </span>
                    <div className="text-3xl ml-[180px] text-[#D1D0C5]">
                        <div className="flex space-x-4 mt-10">
                            <animated.button className={linkStyle} onClick={onRetake} style={buttonsProps}>Try again</animated.button>
                        </div>
                    </div>
                </animated.h1>
            </div>
            <div className="w-[45%] h-screen from-zinc-800 to-zinc-900 flex flex-col justify-center items-center">
                <animated.div className="w-full h-[75%] flex flex-col items-center justify-between mt-10 ml-[30%] text-gray-500 text-3xl space-y-4" style={statsProps}>
                    <div className="flex flex-col">
                        <p>Correct Words:</p>
                        <p className="text-amber-300 text-9xl">{correctWord}</p>
                    </div>
                    <div className="flex flex-col">
                        <p>Incorrect Words:</p>
                        <p className="text-amber-300 text-9xl">{incorrectWord}</p>
                    </div>
                    <div className="flex flex-col">
                        <p>Accuracy:</p>
                        <p className="text-amber-300 text-9xl">{acc}%</p>
                    </div>
                    <div className="flex flex-col">
                        <p>WPM:</p>
                        <p className="text-amber-300 text-9xl">{wpm}</p>
                    </div>
                </animated.div>
            </div>
        </div>
    );
};

export default UserEndGame;
