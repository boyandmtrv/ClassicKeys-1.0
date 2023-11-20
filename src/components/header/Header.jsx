import { Link } from "react-router-dom";
import  Nav  from "./Nav";


const Header = () => {

    return (
        <header className="bg-zinc-800 sticky z-[20] flex-wrap mx-auto flex w-full justify-between border-white p-6">
            <div>
                <Link to='/' className="flex items-center justify-center border-2 border-black rounded-md border-b-4 border-l-4 text-white w-16 h-16 p-2 text-2xl text-[#D1D0C5]"><i className='bx bx-home'></i></Link>
            </div>
            <Nav />
        </header>
    )

}

export default Header;
