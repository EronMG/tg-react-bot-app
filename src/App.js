// import { useEffect } from 'react';
// import './App.css';

// const tg = window.Telegram.WebApp;

// function App() {
//   useEffect(() => {
//     tg.ready();
//   }, []);

//   const onClose = () => {
//     tg.close();
//   };

//   return (
//     <div className='App'>
//       Work <button onClick={onClose}> Закрыть </button>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import { db } from './firebase';

class YourComponent extends React.Component {
  addPoints = () => {
    const userId = 'NrobtNyV-_6raesfRnT';

    db.ref(`users/${userId}/points`).transaction(
      (currentPoints) => (currentPoints || 0) + 1
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.addPoints}>Добавить Points</button>
      </div>
    );
  }
}

export default YourComponent;
