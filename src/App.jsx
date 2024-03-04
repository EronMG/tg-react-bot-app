import { useEffect, useState } from 'react';
import './App.css';
import Frinends from './assets/Friends.svg';
import Rating from './assets/Rating.svg';
import Store from './assets/Store.svg';
import Tasks from './assets/Tasks.svg';
import Dots from './assets/Dots.svg';
import Exit from './assets/Exit.svg';
import Diamond from './assets/Diamond.svg';
import Invite from './components/Invite';
import { PageContext } from './context/Pages';
import { useContext } from 'react';
import RatingBlock from './components/Rating';
const tg = window.Telegram.WebApp;

function App() {
  const { page, handlePage, handleExit } = useContext(PageContext);

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  const navArr = [
    {
      icon: Frinends,
    },
    {
      icon: Rating,
    },
    {
      icon: Store,
    },
    {
      icon: Tasks,
    },
  ];

  return (
    <div>
      {page === 0 ? (
        <Invite />
      ) : page === 1 ? (
        <RatingBlock />
      ) : (
        <section className='App'>
          <header className='Header'>
            <div className='Header__container'>
              <h1> Flag Token </h1>
              <div className='Header__buttons'>
                <img src={Dots} alt='Dots' className='Header__buttons_dots' />
                <img
                  src={Exit}
                  alt='exit'
                  onClick={onClose}
                  className='Header__buttons_exit'
                />
              </div>
            </div>
            <div className='Main__energy'>
              <p>
                ⚡535(+1) / <span className='Main__energy_span'>555</span>
              </p>
              <div className='Main__energy_full'>
                <div className='Main__energy_usefull'> </div>
              </div>
            </div>
          </header>
          <div className='Main'>
            <div className='Main__container'>
              <h2> 💎555.555 </h2> <img src={Diamond} alt='Diamond' />
            </div>
          </div>
          <nav className='Footer'>
            {navArr.map((item, index) => (
              <div
                key={index}
                onClick={() => handlePage(index)}
                className='Footer__container'
              >
                <img src={item.icon} alt='icons' />
              </div>
            ))}
          </nav>
        </section>
      )}
    </div>
  );
}

export default App;
