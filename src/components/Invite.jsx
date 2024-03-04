import React, { useContext } from 'react';
import '../App.css';
import Arrow from '../assets/Arrow-left.svg';
import Dots from '../assets/Dots.svg';
import Exit from '../assets/Exit.svg';
import { PageContext } from '../context/Pages';

const friendsArr = Array.from({ length: 10 }, () => ({
  name: '@Nickname',
  tokens: '555',
  image: '',
}));

const tg = window.Telegram.WebApp;

const Invite = () => {
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
      <div className='Friends__form'>
        <div className='Friends__form_img' />
        <h2>Пригласите друга</h2>
        <p>Получите бонус в +500 к энергии</p>
        <button>Пригласить друга</button>
      </div>
      <div className='Friends'>
        <h2>Список друзей</h2>
        <div className='Friends__container'>
          {friendsArr.map((item, index) => (
            <div key={index} className='Friends__container_user'>
              <div className='img'></div>
              <div className='Friends__user'>
                <p>{item.name}</p>
                <span>💎{item.tokens}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Invite;
