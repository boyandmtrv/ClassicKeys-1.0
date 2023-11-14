import styles from './StartGame.module.css';
import { useState } from 'react';

const StartGame = ({
    onGame,
    onChangeScore
}) => {

    const [text] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit odio fugiat quo est maxime deserunt facere quod blanditiis soluta! Error est suscipit id, porro commodi officia tempore itaque et!');

    return (
        <div className={styles.playHome}>
            <div className={styles.playTitle}>
                Get ready
            </div>
            <button className={styles.playBtn}  onClick={() => onGame('playGame')}>
                Play
            </button>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
        </div>
    )
}

export default StartGame;

