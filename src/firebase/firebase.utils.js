import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: 'AIzaSyAWfeO3t2UhNGjV5wHlH0Xj0DOw77nq9c4',
  authDomain: 'crwn-db-e583f.firebaseapp.com',
  projectId: 'crwn-db-e583f',
  storageBucket: 'crwn-db-e583f.appspot.com',
  messagingSenderId: '1061801035517',
  appId: '1:1061801035517:web:d54e80ca7ee23763812094',
};
firebase.initializeApp(config);
export const auth = firebase.auth();

export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
