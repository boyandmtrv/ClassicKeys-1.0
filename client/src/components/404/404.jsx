import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="bg-gradient-to-br from-zinc-800 to-zinc-900">
            <div className="w-full h-screen flex items-center justify-center mt-[-112px]">
                <div className="bg-transparent shadow p-12 border-2 border-black rounded-md border-b-8 border-l-8">
                    <div className="text-center">
                        <h1 className="text-9xl font-bold text-amber-300">
                            404
                        </h1>
                        <h1 className="text-6xl font-medium py-8 text-white">
                            Oops! Page not found
                        </h1>
                        <p className="text-2xl pb-8 px-12 font-medium text-white">
                            The page you are looking for does not exist.
                        </p>
                        <Link to='/' 
                        className="border-2 border-black rounded-md border-b-8 border-l-8 bg-[#D1D0C5] text-black text-xl p-2 mb-5 transition duration-300 ease-in-out transform hover:bg-amber-300 hover:text-black">
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound; 