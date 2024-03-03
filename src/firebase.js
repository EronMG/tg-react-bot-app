// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
//   apiKey: 'AIzaSyA9hto2IWB71p6yHEXZcsmtKfxJd5Is93E',
//   authDomain: 'tgbots-ca48a.firebaseapp.com',
//   databaseURL: 'https://tgbots-ca48a-default-rtdb.firebaseio.com',
//   projectId: 'tgbots-ca48a',
//   storageBucket: 'tgbots-ca48a.appspot.com',
//   messagingSenderId: '246834518525',
//   appId: '1:246834518525:web:72d909e3e45b4294d36194',
//   measurementId: 'G-R13NMDEJTM',
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
// const database = getDatabase(firebaseApp);

// export { auth, database, firebaseApp as default };

// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA9hto2IWB71p6yHEXZcsmtKfxJd5Is93E',
  authDomain: 'tgbots-ca48a.firebaseapp.com',
  databaseURL: 'https://tgbots-ca48a-default-rtdb.firebaseio.com',
  projectId: 'tgbots-ca48a',
  storageBucket: 'tgbots-ca48a.appspot.com',
  messagingSenderId: '246834518525',
  appId: '1:246834518525:web:72d909e3e45b4294d36194',
  measurementId: 'G-R13NMDEJTM',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

// Проверка аутентификации пользователя
auth.onAuthStateChanged((user) => {
  if (user) {
    // Пользователь аутентифицирован
    const userId = user.uid;

    // Пример: обновление данных в базе данных с использованием транзакции
    db.ref(`users/${userId}/points`)
      .transaction((currentPoints) => (currentPoints || 0) + 1)
      .then(() => {
        console.log('Points updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating points:', error);
      });
  } else {
    // Пользователь не аутентифицирован, выполните необходимые действия (например, показ формы входа)
    console.log('User is not authenticated.');
  }
});
