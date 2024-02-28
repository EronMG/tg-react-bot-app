// App.js

import { useEffect, useState } from 'react';
import firebase from './firebase'; // Путь к вашему файлу firebase.js
import 'firebase/database';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  const [userId, setUserId] = useState(null);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    // Подписка на изменения в базе данных для текущего пользователя
    if (userId) {
      const userRef = firebase.database().ref(`users/${userId}`);
      userRef.on('value', (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          setPoints(userData.points || 0);
        }
      });
    }

    return () => {
      // Отписка от изменений при размонтировании компонента
      if (userId) {
        firebase.database().ref(`users/${userId}`).off();
      }
    };
  }, [userId]);

  const onStartGame = () => {
    // Дополнительная логика начала игры
    // Например, отправка сообщения, подготовка игровых данных и т.д.
    // Здесь можно обновить данные в базе данных, если это необходимо
    // Например, установить флаг начала игры
  };

  const onAddPoints = () => {
    // Увеличиваем поинты при нажатии на кнопку
    if (userId) {
      const userRef = firebase.database().ref(`users/${userId}`);
      const pointsRef = userRef.child('points');
      pointsRef.transaction((currentPoints) => (currentPoints || 0) + 1);
    }
  };

  return (
    <div className='App'>
      Work12
      <button onClick={onStartGame}> Играть </button>
      <button onClick={onAddPoints}> Добавить очки </button>
      <p>Points: {points}</p>
    </div>
  );
}

export default App;
