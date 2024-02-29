import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { database, auth } from './firebase';
import 'firebase/database';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  const [userId, setUserId] = useState(null);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);

        const userRef = database.ref(`users/${user.uid}`);
        userRef.transaction((userData) => {
          if (!userData) {
            // Если пользователь только создан, установим начальные данные
            return {
              points: 0,
              // Другие данные о пользователе, которые вы хотите сохранить
            };
          }
          // Если пользователь уже существует, оставим данные без изменений
          return userData;
        });

        const pointsRef = userRef.child('points');
        pointsRef.on('value', (snapshot) => {
          const data = snapshot.val();
          setPoints(data || 0);
        });

        tg.ready();
      }
    });

    return () => {
      if (userId) {
        database.ref(`users/${userId}/points`).off();
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
      const userRef = database.ref(`users/${userId}`);
      const pointsRef = userRef.child('points');
      pointsRef.transaction((currentPoints) => (currentPoints || 0) + 1);
    }
  };

  return (
    <div className='App'>
      Work
      <button onClick={onStartGame}> Играть </button>
      <button onClick={onAddPoints}> Добавить очки </button>
      <p>Points: {points}</p>
    </div>
  );
}

export default App;
