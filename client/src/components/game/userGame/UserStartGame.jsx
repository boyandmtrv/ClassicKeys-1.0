import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import UserEndGame from "./UserEndGame";

const UserPlayGame = () => {
    const location = useLocation();
    const userText = location.state?.userText || '';
    const time = location.state?.time || '';

    const [words, setWords] = useState([]);
    const [countdown, setCountdown] = useState(time);
    const [currentInputValue, setCurrentInputValue] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [correctWord, setCorrectWord] = useState(0);
    const [incorrentWord, setIncorrectWord] = useState(0);
    const [statusGame, setStatusGame] = useState(false);
    const [inputFocused, setInputFocused] = useState(false);
    const [currCharIndex, setCurrCharIndex] = useState(-1);
    const [currChar, setCurrChar] = useState('');
    const [shouldCapitalize, setShouldCapitalize] = useState(false);


    const textInput = useRef(null);
    const intervalRef = useRef();

    useEffect(() => {
        setWords(generateWords());
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            setStatusGame(true);
        };
    }, [countdown]);

    useEffect(() => {
        if (statusGame === false) {
            textInput.current.focus();
        };
    }, [statusGame]);

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);


    function generateWords() {
        const wordsArray = userText.split(' ');
        return wordsArray;
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

    function handleLetterTyping(e) {
        const { keyCode, key, nativeEvent } = e;
    
        if (keyCode === 32) {
            checkMatchingWords();
            setCurrentInputValue('');
            setWordIndex(wordIndex + 1);
            setCurrCharIndex(-1);
        } else if (keyCode === 20 && nativeEvent) {
            const capsLockActive = nativeEvent.getModifierState('CapsLock');
            setShouldCapitalize(capsLockActive);
        } else if (keyCode === 8) {
            setCurrCharIndex(currCharIndex - 1);
            setCurrChar('');
        } else {
            setCurrCharIndex(currCharIndex + 1);
            setCurrChar(key);
        }
    };

    function getCharClass(word, wordIdx, charIndex, char) {

        const correctWord = wordIdx === wordIndex && charIndex === currCharIndex && currChar && !statusGame;

        if (correctWord) {

            if (char === currChar) {
                return 'border-r-2 border-amber-200 text-[#D1D0C5]'
            } else {
                return 'text-red-500'
            }
        } else if (wordIdx === wordIndex && currCharIndex <= words[wordIndex].length) {
            return 'text-gray-400'
        } else if (wordIdx === wordIndex && currCharIndex > words[wordIndex].length) {
            return 'bg-red-300'
        } else {
            return '';
        };
    };
    
    function checkMatchingWords() {
        const word = words[wordIndex];
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
        setWords(generateWords());
        clearInterval(intervalRef.current);

        setCountdown(time);
        setCurrentInputValue('');
        setWordIndex(0);
        setCorrectWord(0);
        setIncorrectWord(0);
        setCurrCharIndex(-1);
        setCurrChar('');
        setStatusGame(false);
        setInputFocused(false);
    }

    function retakeTest() {
        setCountdown(time);
        clearInterval(intervalRef.current);

        setCurrentInputValue('');
        setWordIndex(0);
        setCorrectWord(0);
        setIncorrectWord(0);
        setCurrCharIndex(-1);
        setCurrChar('');
        setStatusGame(false);
        setInputFocused(false);
    }


    return (
        <div className="flex mt-[-112px] flex-col items-center justify-center h-screen bg-gradient-to-br from-zinc-800 to-zinc-900">
            {!statusGame ? (
                <div className="text-center p-5 text-6xl text-[#D1D0C5]">
                    <h2>{countdown}</h2>
                </div>
            ) : null}
            <div className="mx-auto text-center px-[100px]">
                {!statusGame ? (
                    <div className="text-gray-500 text-3xl text-justify leading-2 line-clamp-3">
                        <div>
                            {words.map((word, i) => (
                                <span key={i}>
                                    <span>
                                        {word.split('').map((letter, index) => (
                                            <span className={getCharClass(word, i, index, letter)} key={index}>{letter}</span>
                                        ))}
                                    </span>
                                    <span> </span>
                                </span>
                            ))}
                        </div>
                    </div>
                ) : null}
                {!statusGame ? (
                    <div className="mt-10">
                        <div className="mt-5">
                            <input
                                type="text"
                                ref={textInput}
                                className="w-[500px] h-[50px] focus:outline-none text-center text-3xl bg-transparent text-zinc-200 border-b-2 border-ra"
                                onKeyDown={handleLetterTyping}
                                value={currentInputValue}
                                onChange={inputTypingValue}
                            />
                        </div>
                    </div>
                ) : null}

                {statusGame ? (
                    <UserEndGame
                        correctWord={correctWord}
                        incorrectWord={incorrentWord}
                        onRefresh={refreshWords}
                        onRetake={retakeTest}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default UserPlayGame;


