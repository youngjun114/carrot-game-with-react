import React, { useContext } from 'react';
import styles from './game_header.module.css';
import { GrPlayFill, GrStopFill } from 'react-icons/gr';
import { GameContext } from '../../context/game_context';

const GameHeader = () => {
  const { startGame, stopGame, start, sec, score } = useContext(GameContext);
  
  const handleClick = () => {
    if (start) stopGame('cancel');
    else startGame();
  };
  return (
    <div className={styles.header}>
      <button className={styles.play_btn} onClick={handleClick}>
        {start ? <GrStopFill /> : <GrPlayFill />}
      </button>
      <span className={styles.timer}>{sec}</span>
      <span className={styles.score}>{score}</span>
    </div>
  );
};

export default GameHeader;
