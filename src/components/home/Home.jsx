import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from './HomeComponent.module.css';

const HomeComponent = () => {

    const [text] = useTypewriter({
        words: ['Clikie', 'Clikes', '//Clikni'],
        typeSpeed: 100,
        deleteSpeed: 100,
        delaySpeed: 80
    });

    return (
            <div className={styles.home}>
                <div className={styles.left}>
                    <div className={styles.heading}>
                        <h1>{text} <Cursor /></h1>
                        {/* <p><span>// </span>Test <span>// </span>Compete <span>//</span> Improve</p> */}
                        <li><a href="/">/* Start Typing */</a></li>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightNav}>
                        <a href="/"><i className='bx bxl-github'></i></a>
                        <a href="/"><i className='bx bxl-linkedin' ></i></a>
                    </div>
                </div>
            </div>
    )
}

export default HomeComponent;