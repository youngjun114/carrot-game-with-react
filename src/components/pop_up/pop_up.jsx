import React from 'react';
import { MdRefresh } from 'react-icons/md';
import styles from './pop_up.module.css';

const PopUp = ({ message }) => {
  return (
    <div className={styles.pop_up}>
      <button className={styles.refresh_btn}>
        <MdRefresh className={styles.refresh_icon} />
      </button>
      <span className={styles.message}>{message}</span>
    </div>
  );
};

export default PopUp;
