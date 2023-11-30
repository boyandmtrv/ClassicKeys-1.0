import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
    return (
        <div className="flex w-full h-screen">
            <div className="bg-white dark:bg-gray-800 w-full px-4 flex flex-col justify-center items-center">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800  md:w-9/12 lg:w-7/12 dark:text-white">Welcome to the coveted family of luxe!</h1>
                <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12 dark:text-white">A confirmation email has been sent to your account, johndoe@gmail.com, with the details of shipping and delivery.</p>
            </div>
        </div>
    );
};

export default About;
