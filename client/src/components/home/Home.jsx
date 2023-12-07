import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HomeComponent = () => {
    const [text] = useTypewriter({
        words: ['ClasicK', 'ClassixKeo', 'ClassicKeys 1.0'],
        typeSpeed: 80,
        deleteSpeed: 40,
        delaySpeed: 40
    });
    const [subText] = useTypewriter({
        words: [` Chrono Champion Edition`],
        typeSpeed: 100,
        delaySpeed: 80,
    });

    return (
        <div className="text-neutral-200 bg-gradient-to-br from-zinc-800 to-zinc-900 w-full h-screen ">
            <div className="max-w-[900px] mt-[-112px] h-full mx-auto text-center flex flex-col justify-center ">
                <h1
                    className="text-8xl absolute top-[40%]">
                    {text}
                    <div className="text-9xl inline-block text-neutral-200">
                        <Cursor />
                    </div>
                </h1>
                <h1
                    className="text-3xl absolute top-[55%] left-[38%] text-amber-200">
                    {subText}
                </h1>
                <div className="flex flex-col justify-center top-[57%] right-[41%] absolute items-center mt-10">
                    <Link
                        to='/play'
                        className="text-lg bg-[#D1D0C5] text-zinc-800 w-64 h-10 flex items-center justify-center mr-12 border-2 border-black rounded-md border-b-4 border-l-4 font-black px-2 focus:bg-gray-300 transition duration-500 hover:bg-black hover:text-[#D1D0C5] hover:border-amber-200"
                    >
                        /* Start Typing */
                    </Link>
                </div>
                <div className="absolute bottom-0 right-0 mb-4 mr-10 flex items-center">
                    <Link
                        to="https://github.com/boyandmtrv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl text-[#D1D0C5] hover:text-black">
                        <i
                            className='bx bxl-github border-2 border-black rounded-md border-b-4 border-l-4 w-16 h-16 flex items-center justify-center transition duration-500 hover:bg-[#D1D0C5] hover:border-amber-200'>
                        </i>
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/boyan-dimitrov-4402b4179/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl text-[#D1D0C5] ml-12 hover:text-black">
                        <i
                            className='bx bxl-linkedin border-2 border-black rounded-md border-b-4 border-l-4 w-16 h-16 flex items-center justify-center transition duration-500 hover:bg-[#D1D0C5] hover:border-amber-200'>
                        </i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;

