import { storeApi } from '../api';

export const ACTION_NAMES = {
  GET_ITEMS: 'GET_ITEMS',
  SET_ITEMS_BY_ID: 'SET_ITEMS_BY_ID',
  SET_ITEMS_ID_ARRAY: 'SET_ITEMS_ID_ARRAY',
};

export const getItems = () => async dispatch => {
  console.log('fetching');

  try {
    const { data } = await storeApi.get();
    console.log('data ', data);
    const itemsBySku = Object.fromEntries(data.map(item => [item.sku, item]));
    const itemIds = data.map(({ sku }) => sku);

    dispatch({ type: ACTION_NAMES.SET_ITEMS_BY_ID, payload: itemsBySku });
    dispatch({ type: ACTION_NAMES.SET_ITEMS_ID_ARRAY, payload: itemIds });
  } catch (err) {
    console.log(err);
  }
};
