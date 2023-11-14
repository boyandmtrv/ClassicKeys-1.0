import EndGameContollerComponent from './EndGameComponentController';
import PlayGameContollerComponent from './PlayGameControllerComponent';
import { useEffect, useState } from 'react';

const GameControllerComponent = () => {

    const [gameStatus, setGameStatus] = useState(null);
    const [score, setScore] = useState(null);

    useEffect(() => {
        if (gameStatus === 'playGame') {
            setScore({
                rightWords: 0,
                wrongWords: 0,
            })
        };

    }, [gameStatus]);

    const handleGameStatusChange = (status) => {
        setGameStatus(status)
    };

    const handleChangeFinalScore = (type) => {
        if (type === 'right') {
            setScore({
                ...score,
                rightWords: score.rightWords + 1
            })
        } else {
            setScore({
                ...score,
                wrongWords: score.wrongWords + 1
            })
        }
    }

    let layout;

    if (gameStatus === 'end') {
        layout = <EndGameContollerComponent />
    } else if ('playGame') {
        layout = <PlayGameContollerComponent
            onGame={handleGameStatusChange}
            onChangeScore={handleChangeFinalScore}
        />
    }

    return (
        <>
            {layout}
        </>
    )
};

export default GameControllerComponent