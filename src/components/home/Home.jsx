import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const HomeComponent = () => {

    const [text] = useTypewriter({
        words: ['Clij', 'Cluk', 'Clik'],
        typeSpeed: 100,
        deleteSpeed: 100,
        delaySpeed: 80
    });

    return (
        <div className="text-neutral-200 bg-zinc-800 w-full h-full">
            <div className="max-w-[800px] mt-[-112px] h-screen mx-auto text-center flex flex-col justify-center text-9xl">
                <h1>{text}
                    <div className="text-9xl inline-block text-neutral-200">
                        <Cursor />
                    </div>
                </h1>
                <div className="flex flex-col justify-center items-center mt-10">
                    <Link to='/play' className="text-lg bg-amber-300 text-zinc-800 w-64 h-10 flex items-center justify-center mr-12 border-4 border-amber-100 hover:border-amber-500 transition duration-500 rounded-tl-sm rounded-br-sm">/* Start Typing */</Link>
                </div>
                <div className="absolute bottom-0 right-0 mb-4 mr-10">
                    <a href="/" className="text-3xl text-amber-200"><i className='bx bxl-github'></i></a>
                    <a href="/" className="text-3xl text-amber-200 ml-12"><i className='bx bxl-linkedin'></i></a>
                </div> 
            </div>
        </div>
    )
}

export default HomeComponent;