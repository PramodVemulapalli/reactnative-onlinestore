import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PHONE_CHANGED,
  FIRSTNAME_CHANGED,
  LASTNAME_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_STATUS_CHANGED,
  LOAD_WELCOME_CHANGED,
  SIGNUP_USER,
  ERROR_SET
} from './types';

export const errorSet = (text) => {
  return {
    type: ERROR_SET,
    payload: text
  };
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const phoneChanged = (text) => {
  return {
    type: PHONE_CHANGED,
    payload: text
  };
};

export const firstnameChanged = (text) => {
  return {
    type: FIRSTNAME_CHANGED,
    payload: text
  };
};

export const lastnameChanged = (text) => {
  return {
    type: LASTNAME_CHANGED,
    payload: text
  };
};

export const loginStatusChanged = (text) => {
  console.log ("login status : " + text);
  return {
    type: LOGIN_STATUS_CHANGED,
    payload: text
  };
};

export const loadWelcomeChanged = (text) => {
  console.log ("load Windows Screen : " + text);
  return {
    type: LOAD_WELCOME_CHANGED,
    payload: text
  };
};


export const loginUser = ({ email, password }) => {

  return async (dispatch) => {

    dispatch({
      type: LOGIN_STATUS_CHANGED,
      payload: 'checking'
    });
    dispatch({ type: LOGIN_USER });
    try {
      let user = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('user logged successfully');
      loginUserSuccess(dispatch, user);
    }
    catch (error) {
      console.log(error);
      let err_message = error.message;
      loginUserFail(dispatch, err_message);
    }


  };
};

export const logoutUser = () => {

  return async (dispatch) => {
      dispatch({
        type: LOGIN_STATUS_CHANGED,
        payload: 'checking'
      });
      try {
        await firebase.auth().signOut();
      } catch (error) {
        console.log(error);
        dispatch({
          type: LOGIN_STATUS_CHANGED,
          payload: 'loggedin'
        });
      }
  };

};

export const signupUser = ({ email, password, phone, firstname, lastname  }) => {
  return async (dispatch) => {

    dispatch({
      type: LOGIN_STATUS_CHANGED,
      payload: 'checking'
    });
    dispatch({ type: SIGNUP_USER });
    var displayName = firstname + ' ' + lastname;
    var phoneNumber = '+1'+ phone;
    console.log(email);
    console.log(password);
    console.log(displayName);
    console.log(phoneNumber);

    try {
      let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      user.updateProfile({ displayName });
      // write user properties to firebase
      firebase.database().ref(`/users/${user.uid}/userDetails`).set({
        email,
        phone,
        firstname,
        lastname,
        displayName
      });
      console.log(user);
      loginUserSuccess(dispatch, user);
    }
    catch (error) {
      console.log(error);
      loginUserFail(dispatch);
    }

  };
};

export const authStateChanged = () => {
  return ( dispatch ) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch({
            type: LOGIN_STATUS_CHANGED,
            payload: 'loggedin'
          });
        } else {
         dispatch({
            type: LOGIN_STATUS_CHANGED,
            payload: 'notloggedin'
          });
        }
      });
  }

}



const loginUserFail = (dispatch, err_message) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: err_message
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

};
