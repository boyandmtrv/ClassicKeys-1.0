import { useState, useEffect, useRef } from 'react';
import { generate } from 'random-words';
import wordHelpers from '../../utils/wordUtils';
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
    const [currCharIndex, setCurrCharIndex] = useState(-1);
    const [currChar, setCurrChar] = useState('')

    const textInput = useRef(null);
    const intervalRef = useRef();


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

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
      }, []);


    function generateRandomWords() {
        const words = new Array(wordHelpers.NUMBER_OF_WORDS).fill(null).map(() => generate());

        return words;
    };

    function startTimerCountdown() {
        intervalRef.current = setInterval(() => {
          setCountdown((lastSecondCount) => {
            if (lastSecondCount === 0) {
              clearInterval(intervalRef.current);
            } else {
              return lastSecondCount - 1;
            }
          });
        }, 1000);
      };


    function handleLetterTyping({ keyCode, key }) {
        if (keyCode === 32) {
            checkMatchingWords();
            setCurrentInputValue('')
            setWordIndex(wordIndex + 1);
            setCurrCharIndex(-1);
        } else if (keyCode === 8) {
            setCurrCharIndex(currCharIndex - 1);
            setCurrChar('')
        } else {
            setCurrCharIndex(currCharIndex + 1);
            setCurrChar(key);
        };
    };

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

    function getCharClass(wordIdx, charIndex, char) {
    
        const correctWord = wordIdx === wordIndex && charIndex === currCharIndex && currChar && !statusGame;

        if (correctWord) {
            
            if (char === currChar) {
                return 'border-r-2 border-amber-200 text-neutral-100'
            } else {
                return 'text-red-500'
            }
        } else if (wordIdx === wordIndex && currCharIndex >= wordsCount[wordIndex].length) {
            return 'bg-red-300'
        } else {
            return '';
        };

    }

function refreshWords() {
    setWordsCount(generateRandomWords());
    clearInterval(intervalRef.current); 

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
    clearInterval(intervalRef.current); 

    setCurrentInputValue('');
    setWordIndex(0);
    setCorrectWord(0);
    setIncorrectWord(0);
    setStatusGame(false);
    setInputFocused(false);
}

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-zinc-800">
            {!statusGame ? (
                <div className=" mt-[-120px] text-center p-5 text-5xl text-[#D1D0C5]">
                    <h2>{countdown}</h2>
                </div>
            ) : null}

            <div className="mx-auto text-center px-[100px]">
                {!statusGame ? (
                    <div className="text-gray-500 text-2xl text-justify leading-2 line-clamp-3">
                        <div className="">
                            {wordsCount.map((word, i) => (
                                <span key={i}>
                                    <span className="">
                                        {word.split('').map((letter, index) => (
                                            <span className={getCharClass(i, index, letter)} key={index}>{letter}</span>
                                        ))}
                                    </span>
                                    <span> </span>
                                </span>
                            ))}
                        </div>
                    </div>
                ) : null}
                {!statusGame ? (
                    <div className="mt-4">
                        <button className="px-4 py-2" onClick={refreshWords}>
                            <i className='bx bx-refresh text-5xl text-[#D1D0C5] mt-5'></i>
                        </button>
                        <div className="mt-5">
                            <input
                                type="text"
                                ref={textInput}
                                className="w-[500px] h-[50px] focus:outline-none text-center text-3xl bg-zinc-800 text-zinc-200 border-b-2 border-ra"
                                onKeyDown={handleLetterTyping}
                                value={currentInputValue}
                                onChange={inputTypingValue}
                            />
                        </div>
                    </div>
                ) : null}

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
    );

}

export default StartGame;

