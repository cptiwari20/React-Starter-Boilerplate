import { firebase, GoogleAuthProvider } from '../firebase/firebase';

export const login = (uid) => {
  return {
    type: "LOGIN",
    payload: uid
  }
}

export const startSignIn = () => () => {
  return firebase.auth().signInWithPopup(GoogleAuthProvider);
};

export const logout = () => {
  return {
    type: "LOGOUT"
  }
}

export const startSignOut = () => () => {
  return firebase.auth().signOut();
}