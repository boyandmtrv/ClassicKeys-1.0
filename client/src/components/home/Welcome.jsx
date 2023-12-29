import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import AuthContext from "../../contexts/AuthContext";

const Welcome = () => {
    const { username } = useContext(AuthContext);

    const [text] = useTypewriter({
        words: [`Welcome,`],
        typeSpeed: 80,
        deleteSpeed: 100,
        delaySpeed: 80,
    });

    const [userText] = useTypewriter({
        words: [`       ${username}`],
        typeSpeed: 80,
        deleteSpeed: 100,
        delaySpeed: 80,
    });

    const [infoText] = useTypewriter({
        words: [`               Enjoy your typing 
        `],
        typeSpeed: 81,
        deleteSpeed: 100,
        delaySpeed: 80,
    });

    const linkStyle =
        "flex flex-col items-center justify-center border-2 border-black rounded-md border-b-8 border-l-8 text-[#D1D0C5] w-72 h-16 p-2 mb-5 transition duration-300 ease-in-out transform hover:bg-amber-300 hover:text-black";

    return (
        <div className="w-full h-scree flex">
            <div className="lg:w-[65%] md:w-[70%]  h-screen relative border-r-2 border-zinc-700">
                <h1 className="absolute -translate-x-2/4 translate-y-[-50] lg:ml-[200px] md:ml-[100px] sm:ml-[250px] min-[320px]:ml-[140px] lg:mt-[30%] md:mt-[30%] sm:mt-[50px] min-[320px]:mt-[70px] lg:text-[150px] md:text-[100px] sm:text-4xl min-[320px]:text-2xl text-white">
                    <span className="mt-[-50px] text-black tracking-widest">
                        <div
                            className="text-white">
                            {text} {userText}
                            <div className="lg:text-[150px] md:text-[100px] sm:text-5xl inline-block text-amber-300">
                                <Cursor />
                            </div>
                        </div>
                    </span>
                    <div className="lg:text-4xl md:text-3xl sm:text-sm min-[320px]:text-[12px]  text-[#D1D0C5] underline">
                        {infoText}
                    </div>
                </h1>
            </div>
            <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] min-[320px]:w-full h-screen lg:backdrop-blur md:backdrop-blur flex flex-col justify-center items-center text-3xl">
                <Link to="/play"
                    className={linkStyle}>
                    Play Game
                </Link>
                <Link to="/games/create"
                    className={linkStyle}>
                    Create
                </Link>
                <Link to="/games"
                    className={linkStyle}>
                    Browse Games
                </Link>
                <Link to="/users/logout"
                    className={linkStyle}>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
