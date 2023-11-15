import { useState, useEffect } from 'react';
import { generate } from 'random-words';
import wordHelpers from '../../utils/wordUtils';
import styles from './StartGame.module.css';

const StartGame = () => {

    const [wordsCount, setWordsCount] = useState([]);
    const [countdown, setCountdown] = useState(wordHelpers.SECONDS);
    const [currentInputValue, setCurrentInputValue] = useState('');
    const [wordIndex, setWordIndex] = useState(0);

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

    function handleLetterTyping({ key }) {
        if (key === ' ') {
            checkMatchingWords();
            setCurrentInputValue('')
            setWordIndex(wordIndex + 1);
        }
    }
    function checkMatchingWords() {
        const word = wordsCount[wordIndex];
        const match = word === currentInputValue.trim();
        console.log(match);
    }

    function inputLetterTypingValue(e) {
        setCurrentInputValue(e.target.value);
    };


    return (
        <div className={styles.startGame}>
            <div className={styles.playSection}>
                <div className={styles.timerCount}>
                    <h2>{countdown}</h2>
                </div>
                <div className={styles.wordContent}>
                    {wordsCount.map((word, i) => (
                        <span key={i}>
                            <span>
                                {word.split('').map((letter, index) => (
                                    <span key={index}>{letter}</span>
                                ))}
                            </span>
                            <span> </span>
                        </span>
                    ))}
                </div>
                <div className={styles.inputField}>
                    <input
                        type="text"
                        className={styles.inputTypeField}
                        onKeyDown={handleLetterTyping}
                        value={currentInputValue}
                        onChange={inputLetterTypingValue}
                    />
                </div>
                <div className={styles.button}>
                    <button onClick={startTimerCountdown}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default StartGame;

