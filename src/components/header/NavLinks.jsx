import { Link } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <Link to='/play' className="flex items-center justify-center border-2 border-black rounded-md border-b-4 border-l-4 text-[#D1D0C5] w-16 h-16 p-2 ">
                <i className='bx bxs-keyboard'></i>
            </Link>
            <Link to='/create' className="flex items-center justify-center border-2 border-black rounded-md border-b-4 border-l-4 text-[#D1D0C5] w-16 h-16 p-2 ">
                <i className='bx bxs-edit-alt'></i>
            </Link>
            <Link to='/' className="flex items-center justify-center border-2 border-black rounded-md border-b-4 border-l-4 text-[#D1D0C5] w-16 h-16 p-2 ">
                <i className='bx bxs-dashboard'></i>
            </Link>
            <Link to='/users/login' className="flex items-center justify-center border-2 border-black rounded-md border-b-4 border-l-4 text-[#D1D0C5] w-16 h-16 p-2 ">
                <i className='bx bx-user-check'></i>
            </Link>
            <Link to='/users/register' className="flex items-center justify-center border-2 border-black rounded-md border-b-4 border-l-4 text-[#D1D0C5] w-16 h-16 p-2 ">
                <i className='bx bx-user-plus'></i>
            </Link>
        </>
    );
};

export default NavLinks;