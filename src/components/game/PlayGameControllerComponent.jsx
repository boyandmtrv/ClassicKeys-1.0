import styles from './PlayGameControllerComponent.module.css';

const PlayGameContollerComponent = ({
    onGame,
    onChangeScore
}) => {
    return (
        <div className={styles.playHome}>
            <div className={styles.playTitle}>
                Get ready
            </div>
            <button className={styles.playBtn}  onClick={() => onGame('playGame')}>
                Play
            </button>
        </div>
    )
}

export default PlayGameContollerComponent;
