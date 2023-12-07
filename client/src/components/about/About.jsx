import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-gradient-to-br from-zinc-800 to-zinc-900">
            <div className="w-full h-screen flex justify-center items-center mt-[-112px]">
                <div className="flex space-x-8 mt-[9%] m-[7%]">
                    <div className="p-8 mb-10 border-2 bg-[#D1D0C5] border-black rounded-md border-b-8 border-l-8">
                        <div className="my-8">
                            <h1 className="text-black 2xl:text-7xl pl-12 pt-[100px] 2xl:-mt-10">
                                About Us
                            </h1>
                        </div>
                        <div className="-mt-6 relative">
                            <p className="text-amber-200 text-xl font-bold lg:px-9 2xl:pt-6 2xl:mx-2"
                                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                ClassicKeys 1.0 is a minimalistic and customizable typing test. It features test mode with costumizable timer and generating different words by your preference. ClassicKeys 1.0 attemps to emulate retro feel experience of natural keyboard typing during a typing test by providing straightforward, real-time feedback on speed, accuracy, correct and incorrect words.
                            </p>
                            <br />
                            <div className="text-zinc-800 2xl:text-md lg:px-9  2xl:mx-2">
                                <p>User Information:</p>
                                <p>Each authenticated user is privileged to:</p>
                                <p>- Create / Edit / Delete their own game</p>
                                <p>- Customize the game by their preferences, choosing difficulty levels and seconds</p>
                                <p>- Test their own game and games created by other users</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-700 p-8 border-2 border-black rounded-md border-b-8 border-l-8 mb-10 pt-[90px]">
                        <div className="mt-8 lg:mx-2">
                            <p className="text-amber-300 text-4xl font-semibold pt-1 px-6">
                                Word Set and seconds
                            </p>
                            <br />
                            <p className="text-white text-opacity-50 font-medium text-xl mt-2 px-4">
                                By default, ClassicKeys 1.0 uses 200 words in the English language to generate its tests and the most common seconds pattern. You can change the generated set by resetting the words and easily switch the seconds—all easily accessed in the main game menu.
                            </p>
                            <p className="text-amber-300 text-4xl font-semibold pt-10 px-6">Stats</p>
                            <br />
                            <p className="text-white text-opacity-50 font-medium text-xl px-4">
                                - wpm - total amount of characters in the correctly typed words (exincluding spaces) <br />
                                - acc - percentage of correctly pressed keys.
                                <br />
                                - words - correct words / incorrect words. Calculated after the test has ended.
                            </p>
                        </div>
                    </div>

                    <div className="bg-zinc-800 p-8 w-[19%] border-2 border-black rounded-md border-b-8 border-l-8 mb-10 pt-[90px] flex flex-col items-center justify-center">
                        <div className="mt-8 lg:mx-2 text-center">
                            <p className="text-[#D1D0C5] text-4xl font-semibold pt-4">
                                Reach out:
                            </p>
                            <br />
                            <Link to="https://github.com/boyandmtrv" target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-[#D1D0C5] hover:text-black">
                                <i className='bx bxl-github border-2 border-black rounded-md border-b-4 border-l-4 w-16  ml-7 h-16 flex items-center justify-center transition duration-500 hover:bg-[#D1D0C5] hover:border-amber-200'></i>
                            </Link>

                            <Link to="https://www.linkedin.com/in/boyan-dimitrov-4402b4179/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl text-[#D1D0C5] hover:text-black">
                                <i className='bx bxl-linkedin border-2 border-black rounded-md border-b-4 border-l-4 w-16  ml-7 h-16 flex items-center justify-center transition duration-500 hover:bg-[#D1D0C5] hover:border-amber-200'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
