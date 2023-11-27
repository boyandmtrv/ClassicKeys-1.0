import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useSpring, animated } from 'react-spring';



const EndGame = ({
    correctWord,
    incorrectWord,
    onRefresh,
    onRetake
}) => {

    const acc = `${(Math.round((correctWord / (correctWord + incorrectWord)) * 100))} %`;

    let textToShow;
    if (acc >= '80') {
        textToShow = "Great job!";
    } else if (acc >= '60') {
        textToShow = "Good effort!";
    } else {
        textToShow = "Pretty bad!";
    }

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
        <div className="w-full h-screen bg-zinc-800 flex">
            <div className="w-[50%] h-screen bg-zinc-800">
                <animated.h1 className="translate-x-2/4 translate-y-[-50] mt-[30%] text-[120px] text-white" style={headerProps}>
                    <span className="text-black tracking-tighter">
                        <div className="text-white">{textToShow}, {username}</div>
                    </span>
                    <div className="text-3xl ml-[70px] text-[#D1D0C5]">
                        <div className="flex space-x-4 mt-10">
                            <animated.button className={linkStyle} onClick={onRefresh} style={buttonsProps}>Refresh Test</animated.button>
                            <animated.button className={linkStyle} onClick={onRetake} style={buttonsProps}>Re-take Test</animated.button>
                        </div>
                    </div>
                </animated.h1>
            </div>
            <div className="w-[50%] h-screen bg-zinc-800 flex flex-col justify-center items-center">
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
                        <p className="text-amber-300 text-9xl">{acc}</p>
                    </div>
                </animated.div>
            </div>
        </div>
    );
};

export default EndGame;
