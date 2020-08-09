import React from 'react';
import styles from './Item.module.scss';

export const Item = ({ itemData }) => (
  <div className={styles['item-entry']}>
    <img className={styles.image} src="https://picsum.photos/300/250"></img>
    <div className={styles.container}>
      <h3 className={styles.header}>{itemData.brand}</h3>
      <span className={styles.description}>{itemData.description}</span>
      <span className={styles.price}>{itemData.prices.final}</span>
    </div>
  </div>
);
