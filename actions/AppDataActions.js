import firebase from 'firebase';

import {
  ITEMS_FETCH_SUCCESS
} from './types';

export const itemsFetch = () => {
  const { currentUser } = firebase.auth();
  console.log('--> Inside AppDataActions ');
  return (dispatch) => {
    firebase.database().ref(`/items`)
      .on('value', snapshot => {
        dispatch({ type: ITEMS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
