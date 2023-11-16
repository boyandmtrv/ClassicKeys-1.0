import { Link } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <Link to='/play'><i className='bx bxs-keyboard' ></i></Link>
            <Link to='/'><i className='bx bxs-dashboard' ></i></Link>
            <Link to='/users/login'><i className='bx bx-user-check'></i></Link>
            <Link to='/users/register'><i className='bx bx-user-plus' ></i></Link>
        </>
    )
};

export default NavLinks;
