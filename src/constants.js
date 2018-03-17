import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAlLLIQEYGX3fnLJ29kTu5aCj-F3sPz7uk',
  authDomain: 'duckr-cdf20.firebaseapp.com',
  databaseURL: 'https://duckr-cdf20.firebaseio.com',
  projectId: 'duckr-cdf20',
  storageBucket: '',
  messagingSenderId: '11414953662'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const firebaseAuth = firebase.auth;
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const ref = firebase.database().ref();

export const usersDucksExpirationLength = 100000;
export const userExpirationLength = 100000;

export const repliesExpirationLength = 300000;
