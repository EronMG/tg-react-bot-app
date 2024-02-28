import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA9hto2IWB71p6yHEXZcsmtKfxJd5Is93E',
  authDomain: 'tgbots-ca48a.firebaseapp.com',
  projectId: 'tgbots-ca48a',
  storageBucket: 'tgbots-ca48a.appspot.com',
  messagingSenderId: '246834518525',
  appId: '1:246834518525:web:72d909e3e45b4294d36194',
  measurementId: 'G-R13NMDEJTM',
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export { auth, database, firebaseApp as default };
