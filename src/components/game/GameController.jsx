import EndGame from './EndGame';
import StartGame from './StartGame';
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
        layout = <EndGame />
    } else if ('playGame') {
        layout = <StartGame
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