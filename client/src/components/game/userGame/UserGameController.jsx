import { useState } from "react";

import UserStartGame from './UserStartGame';
import UserEndGame from './UserEndGame';

const UserGameController = () => {

    const [gameStatus, setGameStatus] = useState('play');

    function handleGameEndStatus() {
        setGameStatus('end')
    };

    function handleGameRefreshStatus() {
        setGameStatus('play');
    };

    let layout;

    if (gameStatus === 'end') {
        layout = <UserEndGame onRefresh={handleGameRefreshStatus} />
    } else {
        layout = <UserStartGame onGameEnd={handleGameEndStatus} />
    };

    return (
        <div className="gamePart">
            {layout}
        </div>
    );
};

export default UserGameController;