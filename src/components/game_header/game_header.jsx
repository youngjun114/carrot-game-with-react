import React from 'react';
import styles from './game_header.module.css';
import { GrPlayFill, GrStopFill } from 'react-icons/gr';

const GameHeader = ({ start, timeRemaining, startGame, stopGame, score }) => {
  return (
    <div className={styles.header}>
      <button
        className={styles.play_btn}
        onClick={start ? stopGame : startGame}
      >
        {start ? <GrStopFill /> : <GrPlayFill />}
      </button>
      <span className={styles.timer}>{timeRemaining}</span>
      <span className={styles.score}>{score}</span>
    </div>
  );
};

export default GameHeader;
