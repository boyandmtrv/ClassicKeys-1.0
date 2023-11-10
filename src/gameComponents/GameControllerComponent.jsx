import TestComp from './TestComp';
import Test2Comp from './Test2Comp';
import { useState } from 'react';

const GameControllerComponent = () => {

    const [gameStatus, setGameStatus] = useState(null);

    const handleGameStatusChange = (status) => {
        setGameStatus(status)
    }

    let layout;

    if (gameStatus === 'end') {
        layout = <Test2Comp />
    } else {
        layout = <TestComp onGame={handleGameStatusChange} />
    }

    return (
        <>
            {layout}
        </>
    )
};

export default GameControllerComponent