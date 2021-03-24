import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDBj5slbkEAU6iUzVuRfaj2lsIznAPiXDY',
	authDomain: 'crwn-db-1c8d6.firebaseapp.com',
	projectId: 'crwn-db-1c8d6',
	storageBucket: 'crwn-db-1c8d6.appspot.com',
	messagingSenderId: '351960344116',
	appId: '1:351960344116:web:55b86815b989b06f78cc61',
	measurementId: 'G-891RCLC4VP'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
