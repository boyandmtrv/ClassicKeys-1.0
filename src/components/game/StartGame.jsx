import { useState, useEffect } from 'react';
import { generate } from 'random-words';
import wordHelpers from '../../utils/wordUtils';
import styles from './StartGame.module.css';

const StartGame = () => {

    const [wordsCount, setWordsCount] = useState([]);
    const [countdown, setCountdown] = useState(wordHelpers.SECONDS);

    useEffect(() => {
        setWordsCount(generateRandomWords());
    }, []);

    function generateRandomWords() {
        const words = new Array(wordHelpers.NUMBER_OF_WORDS).fill(null).map(() => generate());

        return words;
    };

    function startTimerCountdown() {
        let interval = setInterval(() => {
            setCountdown((lastSecondCount) => {
                if (lastSecondCount === 0) {
                    clearInterval(interval);
                } else {
                    return lastSecondCount - 1;
                }
            })
            
        }, 1000)
    };

    return (
        <div className={styles.startGame}>
            <div className={styles.playSection}>
                <div className={styles.timerCount}>
                    <h2>{countdown}</h2>
                </div>
                <div className={styles.wordContent}>
                    {wordsCount.join(' ').split('').map((word, i) => (
                        <span className={styles.eachWord}>
                            {word}
                        </span>
                    ))}
                </div>
                <div className={styles.inputField}>
                    <input type="text" className={styles.inputTypeField}/>
                </div>
                <div className={styles.button}>
                    <button onClick={startTimerCountdown}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default StartGame;

