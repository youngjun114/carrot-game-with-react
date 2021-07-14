import React, { memo } from 'react';
import styles from './item.module.css';

const Item = memo(({ x, y, imgPath, id, name }) => {
  const style = {
    left: x,
    top: y,
  };
  return (
    <img
      className={styles.item}
      src={imgPath}
      alt='item'
      style={style}
      id={id}
      data-item={name === 'carrot' ? 'carrot' : 'bug'}
    />
  );
});

export default memo(Item);
