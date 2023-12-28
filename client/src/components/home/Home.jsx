import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HomeComponent = () => {
    const [isJumping, setJumping] = useState(false);

    const startJumpingAnimation = () => {
        setJumping(true);
    };

    const [text, { isDone }] = useTypewriter({
        words: [`ClassicKeys 1.0`],
        typeSpeed: 100,
        delaySpeed: 80,
        onTypingEnd: startJumpingAnimation,
    });

    const [welcomeText] = useTypewriter({
        words: [`Welcome to`],
        typeSpeed: 50,
        delaySpeed: 80,
    });

    useEffect(() => {
        if (isDone) {
            const interval = setInterval(() => {
                setJumping((prevJumping) => !prevJumping);
            }, 350);

            return () => clearInterval(interval);
        }
    }, [isDone]);

    const jumpingStyle = {
        transform: isJumping ? "translateY(-20px)" : "translateY(0)",
        transition: "transform 0.5s ease-in-out",
    };

    return (
        <div className="text-[#0A1A30] flex flex-col w-full h-screen justify-center items-center">
            <div className="flex flex-col">
                <h1 className="text-white lg:mt-[10%] lg:text-6xl md:text-5xl sm:text-4xl min-[320px]:text-3xl md:mt-[10%] sm:mt-[30%] min-[320px]:mt-[5%]">{welcomeText}</h1>
            </div>
            <div className="flex flex-col items-center mt-10">
                <h1 style={jumpingStyle} className=" lg:text-[150px] md:text-8xl sm:text-8xl min-[320px]:text-5xl text-center md:mt-[10%] sm:mt-[10%] min-[320px]:mt-[30%]">
                    {text}
                    <Cursor />
                </h1>
            </div>
            <div className="flex flex-col justify-start">
                <Link
                    to="/play"
                    className="text-7xl lg:mt-[80%] md:mt-[100%] sm:mt-[30%] min-[320px]:mt-[80%] bg-[#0B2850] text-[#FFEBAF] w-full flex items-center justify-center border-2 border-black border-b-[12px] rounded-md border-l-[12px] font-black px-2 focus:bg-gray-300 transition duration-500 hover:bg-[#FFEBAF] hover:text-zinc-900 hover:border-white"
                >
                   Start
                </Link>
            </div>
            
        </div>
    );
};

export default HomeComponent;

