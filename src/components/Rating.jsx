import React, { useContext } from 'react';
import '../App.css';
import Arrow from '../assets/Arrow-left.svg';
import Dots from '../assets/Dots.svg';
import Exit from '../assets/Exit.svg';
import { PageContext } from '../context/Pages';
import Gold from '../assets/Gold.svg';
import Silver from '../assets/Silver.svg';
import Bronz from '../assets/Bronze.svg';

const friendsArr = Array.from({ length: 10 }, () => ({
  name: '@Nickname',
  tokens: '555',
  image: '',
}));

const tg = window.Telegram.WebApp;

const Rating = () => {
  const { handleExit } = useContext(PageContext);

  const onClose = () => tg.close();

  return (
    <section className='Friends__section'>
      <header className='Header'>
        <div className='Header__container'>
          <div className='Header__container_left'>
            <img src={Arrow} alt='icon' onClick={handleExit} />
            <h1>Flag Token</h1>
          </div>
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
      </header>
      <div className='Rating__content'>
        <div className='Rating__content_img' />
        <h2>Топ-100 шахтеров</h2>
      </div>
      <div className='Rating__container'>
        {friendsArr.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? 'Friends__container_firstuser'
                : 'Friends__container_user'
            }`}
          >
            {index === 0 ? (
              ''
            ) : index === 1 ? (
              <img src={Gold} alt='icon' />
            ) : index === 2 ? (
              <img src={Silver} alt='icon' />
            ) : index === 3 ? (
              <img src={Bronz} alt='icon' />
            ) : (
              <p className='Rating__user'>{index}</p>
            )}
            <div className='img'></div>
            <div className='Friends__user'>
              <p>{item.name}</p>
              <span>💎{item.tokens}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rating;
