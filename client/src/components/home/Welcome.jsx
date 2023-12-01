import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Welcome = () => {
    const linkStyle =
    "flex flex-col items-center justify-center border-2 border-black rounded-md border-b-8 border-l-8 text-[#D1D0C5] w-72 h-16 p-2 mb-5 transition duration-300 ease-in-out transform hover:bg-amber-300 hover:text-black";


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

    return (
        <div className="w-full h-screen bg-zinc-800 flex mt-[-112px]">
            <div className="w-[65%] h-screen bg-zinc-800 relative border-r-2 border-zinc-700">
                <h1 className="absolute -translate-x-2/4 translate-y-[-50] ml-[200px] mt-[20%] text-[150px] text-white">
                    <span className="mt-[-50px] text-black tracking-widest">
                        <div className="text-white">{text} {userText}
                            <div className="text-[150px] inline-block text-amber-300">
                                <Cursor />
                            </div>
                        </div>
                    </span>
                    <div className="text-4xl ml-[10px] text-[#D1D0C5] underline">{infoText}</div>
                </h1>

            </div>
            <div className="w-[50%] h-screen bg-zinc-800 flex flex-col justify-center items-center text-3xl">
                <Link to="/play" className={linkStyle}>
                    Play Game
                </Link>
                <Link to="/games/create" className={linkStyle}>
                    Create
                </Link>
                <Link to="/games" className={linkStyle}>
                    Browse Games
                </Link>
                <Link to="/users/logout" className={linkStyle}>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
