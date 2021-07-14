import React, { useContext } from 'react';
import { MdRefresh } from 'react-icons/md';
import { GameContext } from '../../context/game_context';
import styles from './pop_up.module.css';

const PopUp = () => {
  const { startGame, message } = useContext(GameContext);
  const handleClick = () => {
    startGame();
  };
  return (
    <div className={styles.pop_up}>
      <button className={styles.refresh_btn} onClick={handleClick}>
        <MdRefresh className={styles.refresh_icon} />
      </button>
      <span className={styles.message}>{message}</span>
    </div>
  );
};

export default PopUp;
