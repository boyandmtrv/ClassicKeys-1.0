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
        <div className="startGame">
            {JSON.stringify(wordsCount)}
        </div>
    )
}

export default StartGame;

