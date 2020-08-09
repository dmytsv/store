import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getItems } from '../actions';
import { Body } from './Body';
import './App.scss'

function App() {
  const dispatch = useDispatch();
  const itemsIds = useSelector(state => state.itemsIds);
  const itemsById = useSelector(state => state.itemsById);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <>
      <Body items={itemsIds.map(id => itemsById[id])} />
    </>
  );
}

export { App };
