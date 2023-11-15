import styles from './EndGame.module.css';

const EndGame = ({
    correctWord,
    incorrectWord,
    onRefresh,
    onRetake
}) => {
    return (
        <div className={styles.EndGame}>
            <div className={styles.endResults}>
                <div className={styles.correntResult}>
                    <p>Correct Words:</p>
                    <p>{correctWord}</p>
                </div>
                <div className={styles.incorrentResult}>
                    <p>Incorrect Words:</p>
                    <p>{incorrectWord}</p>
                </div>
                <div className={styles.accuracyResult}>
                    <p>Accuracy:</p>
                    {Math.round((correctWord / (correctWord + incorrectWord)) * 100)}%
                </div>
                <div className="endGameButtons">
                    <button onClick={onRefresh}>Refresh</button>
                    <button onClick={onRetake}>Re-take Test</button>
                </div>
            </div>
        </div>
    )
}

export default EndGame;
