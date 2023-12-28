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

    useEffect(() => {
        if (isDone) {
            const interval = setInterval(() => {
                setJumping((prevJumping) => !prevJumping);
            }, 350);

            return () => clearInterval(interval);
        }
    }, [isDone]);

    const jumpingStyle = {
        lineHeight: isJumping ? "0.8" : "1", 
        transition: "line-height .5s ease-in-out",
    };
    

    return (
        <div className="text-[#FFFFD1] flex flex-col w-full h-screen justify-center items-center">
            <div className="flex flex-col items-center mt-10">
                <h1 style={jumpingStyle} className=" lg:text-[150px] md:text-8xl sm:text-8xl min-[320px]:text-[56px] text-center md:mt-[10%] sm:mt-[10%] min-[320px]:mt-[30%]">
                    {text}
                    <Cursor />
                </h1>
            </div>
            <div className="flex flex-col justify-start">
                <Link
                    style={jumpingStyle}
                    to="/play"
                    className="text-7xl lg:mt-[80%] md:mt-[100%] sm:mt-[30%] min-[320px]:mt-[80%] bg-[#C46C54] text-[#FFFFD1] w-full flex items-center justify-center border-2 border-black border-b-[8px] rounded-md border-l-[8px] font-black px-2 focus:bg-gray-300 transition duration-300 hover:bg-[#FFEBAF] hover:text-[#369A32] hover:border-white"
                >
                   Start
                </Link>
            </div>
            
        </div>
    );
};

export default HomeComponent;

