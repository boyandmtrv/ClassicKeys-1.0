import { useState, useEffect } from 'react';
import { generate } from 'random-words';
import wordHelpers from '../../utils/wordUtils';
import styles from './StartGame.module.css';

const StartGame = () => {

    const [wordsCount, setWordsCount] = useState([]);

    useEffect(() => {
        setWordsCount(generateRandomWords());
    }, []);

    function generateRandomWords() {
        const words = new Array(wordHelpers.NUMBER_OF_WORDS).fill(null).map(() => generate());

        return words;
    };

    return (
        <div className={styles.startGame}>
            <div className={styles.playSection}>
                <div className={styles.wordContent}>
                    {wordsCount.join(' ').split('').map((word, i) => (
                        <span className={styles.eachWord}>
                            {word}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StartGame;

