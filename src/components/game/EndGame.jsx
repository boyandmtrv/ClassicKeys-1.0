import wordHelpers from '../../utils/wordUtils';
import styles from './EndGame.module.css';

const EndGame = () => {
    return (
        <div className={styles.EndGame}>
            <div className={styles.endResults}>
                <div className={styles.correntResult}>
                    <p>Correct Words:</p>
                </div>
                <div className={styles.incorrentResult}>
                    <p>Incorrect Words:</p>

                </div>
                <div className={styles.accuracyResult}>
                    <p>Accuracy:</p>

                </div>
            </div>
        </div>
    )
}

export default EndGame;
