import { useState } from "react";
import StartGame from './StartGame';
import EndGame from './EndGame';

const GameController = () => {

    const [gameStatus, setGameStatus] = useState('play');

    function handleGameEndStatus() {
        setGameStatus('end')
    };

    function handleGameRefreshStatus() {
        setGameStatus('play');
    }

    let layout;

    if (gameStatus === 'end') {
        layout = <EndGame onRefresh={handleGameRefreshStatus} />
    } else {
        layout = <StartGame onGameEnd={handleGameEndStatus} />
    };

    return (
        <div className="gamePart">
            {layout}
        </div>
    )
};

export default GameController;