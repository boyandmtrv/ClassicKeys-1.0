import { useState, useEffect, useRef } from 'react';
import { generate } from 'random-words';
import wordHelpers from '../../utils/wordUtils';
import styles from './StartGame.module.css';
import EndGame from "./endGame";


const StartGame = () => {

    const [wordsCount, setWordsCount] = useState([]);
    const [countdown, setCountdown] = useState(wordHelpers.SECONDS);
    const [currentInputValue, setCurrentInputValue] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [correctWord, setCorrectWord] = useState(0);
    const [incorrentWord, setIncorrectWord] = useState(0);
    const [statusGame, setStatusGame] = useState(false);
    const [inputFocused, setInputFocused] = useState(false);

    const textInput = useRef(null);


    useEffect(() => {
        setWordsCount(generateRandomWords());
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            setStatusGame(true);
        }
    }, [countdown]);

    useEffect(() => {
        if (statusGame === false) {
            textInput.current.focus();
        }
    }, [statusGame]);


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
        if (match) {
            setCorrectWord(correctWord + 1);
        } else {
            setIncorrectWord(incorrentWord + 1);
        };
    };

    function inputTypingValue(e) {

        if (!inputFocused) {
            setInputFocused(true);
            startTimerCountdown();
        };

        setCurrentInputValue(e.target.value);
    };

    function refreshWords() {
        setWordsCount(generateRandomWords());
        setCountdown(wordHelpers.SECONDS);
        setCurrentInputValue('');
        setWordIndex(0);
        setCorrectWord(0);
        setIncorrectWord(0);
        setStatusGame(false);
        setInputFocused(false);
    }

    function retakeTest() {
        setCountdown(wordHelpers.SECONDS);
        setCurrentInputValue('');
        setWordIndex(0);
        setCorrectWord(0);
        setIncorrectWord(0);
        setStatusGame(false);
        setInputFocused(false);
    }

    return (
        <div className={styles.startGame}>
            <div className={styles.playSection}>
                {!statusGame ? (
                    <div className={styles.timerCount}>
                        <h2>{countdown}</h2>
                    </div>
                ) : null}
                {!statusGame ? (
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
                         <button className={styles.refreshBtn} onClick={refreshWords}><i className='bx bx-refresh'></i></button>
                        <div className={styles.inputField}>
                            <input
                                type="text"
                                ref={textInput}
                                className={styles.inputTypeField}
                                onKeyDown={handleLetterTyping}
                                value={currentInputValue}
                                onChange={inputTypingValue}
                            />
                        </div>

                    </div>) : null}
                {statusGame ? (
                    <EndGame
                        correctWord={correctWord}
                        incorrectWord={incorrentWord}
                        onRefresh={refreshWords}
                        onRetake={retakeTest}
                    />
                ) : null}
            </div>
        </div>
    )
}

export default StartGame;

