import { Link } from "react-router-dom";
import  Nav  from "./Nav";


const Header = () => {

    return (
        <header className="bg-zinc-800 sticky z-[20] flex-wrap mx-auto flex w-full justify-between border-white p-10">
            <div className="text-amber-200 text-2xl">
                <Link to='/'><i className='bx bx-home'></i></Link>
            </div>
            <Nav />
        </header>
    )

}

export default Header;
