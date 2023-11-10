import TestComp from './TestComp';
import Test2Comp from './Test2Comp';
import { useState } from 'react';

const GameControllerComponent = () => {

    const [gameStatus, setGameStatus] = useState('play');

    let layout;

    if (gameStatus === 'play') {
        layout = <TestComp />
    } else {
        layout = <Test2Comp />
    }

    return (
        <>
            {layout}
        </>
    )
};

export default GameControllerComponent