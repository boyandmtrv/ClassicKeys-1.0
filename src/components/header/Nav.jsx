import styles from './NavComponent.module.css';
import { Link } from "react-router-dom";

const NavComponent = () => {

    return (
        <div className={styles.nav}>
            <Link to='/'><i className='bx bx-home'></i></Link>
            <div className={styles.leftNav}>
                <Link to='/play'><i className='bx bxs-keyboard' ></i></Link>
                <Link to='/'><i className='bx bxs-dashboard' ></i></Link>
                <Link to='/users/login'><i className='bx bx-user-check'></i></Link>
                <Link to='/users/register'><i className='bx bx-user-plus' ></i></Link>
            </div>
        </div>
    )

}

export default NavComponent;