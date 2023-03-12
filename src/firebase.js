import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: 'maga-chat-bb289.firebaseapp.com',
	projectId: 'maga-chat-bb289',
	storageBucket: 'maga-chat-bb289.appspot.com',
	messagingSenderId: '719718580791',
	appId: '1:719718580791:web:158781013161d511bf75b2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()