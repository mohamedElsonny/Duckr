import auth, { logout, saveUser } from 'helpers/auth';
import { formatUserInfo } from 'helpers/utils';
import { fetchUser } from 'helpers/api';

const AUTH_USER = 'AUTH_USER';
const UNAUTH_USER = 'UNAUTH_USER';
const FETCHING_USER = 'FETCHING_USER';
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE';
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER';

export const authUser = uid => ({
  type: AUTH_USER,
  uid
});

export const unauthUser = uid => ({
  type: UNAUTH_USER,
  uid
});

export const fetchingUser = () => ({
  type: FETCHING_USER
});

export const fetchingUserFailure = error => ({
  type: FETCHING_USER_FAILURE,
  error: 'Error fetching user'
});

export const fetchingUserSuccess = (uid, user, timestamp) => ({
  type: FETCHING_USER_SUCCESS,
  uid,
  user,
  timestamp
});

export const removeFetchingUser = () => {
  return {
    type: REMOVE_FETCHING_USER
  };
};

export const fetchAndHandleAuthUser = () => {
  return dispatch => {
    dispatch(fetchingUser());
    return auth()
      .then(({ user, credential }) => {
        const userData = user.providerData[0];
        const userInfo = formatUserInfo(
          userData.displayName,
          userData.photoURL,
          user.uid
        );
        return dispatch(fetchingUserSuccess(user.uid, userInfo, Date.now()));
      })
      .then(({ user }) => saveUser(user))
      .then(user => dispatch(authUser(user.uid)))
      .catch(error => dispatch(fetchingUserFailure(error)));
  };
};

export const fetchAndHandleUser = uid => {
  return dispatch => {
    dispatch(fetchingUser());
    return dispatch(fetchUser(uid))
      .then(user => dispatch(fetchingUserSuccess(uid, user, Date.now())))
      .catch(error => fetchingUserFailure(error));
  };
};
export const logoutAndUnauth = () => {
  return dispatch => {
    logout();
    dispatch(unauthUser());
  };
};

const initialUserState = {
  lastUpdate: 0,
  info: {
    name: '',
    uid: '',
    avatar: ''
  }
};

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp
      };
    default:
      return state;
  }
};

const initialState = {
  isFetching: true,
  error: '',
  isAuthed: false,
  authId: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authId: action.uid
      };
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authId: '',
        [action.uid]: {}
      };
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true
      };
    case REMOVE_FETCHING_USER:
      return {
        ...state,
        isFetching: false
      };
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
            ...state,
            error: '',
            isFetching: false
          }
        : {
            ...state,
            error: '',
            isFetching: false,
            [action.uid]: user(state[action.uid], action)
          };
    default:
      return state;
  }
};
