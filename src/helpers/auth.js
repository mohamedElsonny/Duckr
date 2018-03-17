import { ref, firebaseAuth, facebookProvider } from '../constants';

export default () => {
  return firebaseAuth().signInWithPopup(facebookProvider);
};

export const checkIfAuthed = store => {};

export const logout = () => {
  return firebaseAuth().signOut();
};

export const saveUser = user => {
  return ref
    .child(`users/${user.uid}`)
    .set(user)
    .then(() => user);
};
