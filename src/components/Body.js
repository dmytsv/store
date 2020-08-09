import React, { useState } from 'react';

import styles from './Body.module.scss';
import { Item } from './Item';
import { Header } from './Header';

const SORTS = {
  HIGH: 'HIGH',
  LOW: 'LOW',
};

export const Body = ({ items }) => {
  const [sort, setSort] = useState(SORTS.HIGH);
  const sortFunc =
    sort === SORTS.HIGH
      ? (itemA, itemB) =>
          (itemB.prices?.final ?? 0) - (itemA.prices?.final ?? 0)
      : (itemA, itemB) =>
          (itemA.prices?.final ?? 0) - (itemB.prices?.final ?? 0);
  const sortedItems = items.sort(sortFunc);

  const onSortChange = event => {
    event.preventDefault();
    setSort(event.target.value);
  };

  return (
    <>
      <Header className={styles.header} />
      <div className={styles.container}>
        Sort By:
        <select
          name="items"
          id="items"
          onChange={onSortChange}
          className={styles.select}
        >
          <option value={SORTS.HIGH}>Highest Price</option>
          <option value={SORTS.LOW}>Lowest Price</option>
        </select>
      </div>
      <div className={styles['item-list']}>
        {sortedItems.map(item => (
          <Item key={item.sku} itemData={item} />
        ))}
      </div>
    </>
  );
};
