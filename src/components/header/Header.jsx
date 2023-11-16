import { Link } from "react-router-dom";
import  Nav  from "./Nav";


const Header = () => {

    return (
        <header className="bg-zinc-800 sticky top-9 z-[20] flex-wrap mx-auto flex w-full justify-between p-10">
            <div className="text-amber-300 text-2xl">
                <Link to='/'><i className='bx bx-home'></i></Link>
            </div>
            <Nav />
        </header>
    )

}

export default Header;
