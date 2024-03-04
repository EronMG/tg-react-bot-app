import React, { useContext, useState } from 'react';
import '../App.css';
import Arrow from '../assets/Arrow-left.svg';
import Dots from '../assets/Dots.svg';
import Exit from '../assets/Exit.svg';
import ArrowRight from '../assets/RightArrow.svg';
import { PageContext } from '../context/Pages';
import ModalElement from './Modal';

const tg = window.Telegram.WebApp;

const Shop = () => {
  const { handleExit } = useContext(PageContext);

  const onClose = () => tg.close();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className='Shop__section'>
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
      <div className='Shop__content'>
        <div className='Rating__content_img' />
        <h2>Магазин</h2>
      </div>
      <div className='Shop__container'>
        <button className='Shop__container_button'>
          <div className='Button__content'>
            <div className='Button__content_img' />
            <div className='Button__release'>
              <p>Усиления</p>
              <span>Улучшить шахту</span>
            </div>
          </div>
          <img src={ArrowRight} alt='icon' />
        </button>
        <button className='Shop__container_buttoncnt'>
          <div className='Button__content'>
            <div className='Button__content_img' />
            <div className='Button__release'>
              <p>Исследования</p>
              <span>Обнаружите новые технологии</span>
            </div>
          </div>
          <img src={ArrowRight} alt='icon' />
        </button>
        <button className='Shop__container_button'>
          <div className='Button__content'>
            <div className='Button__content_img' />
            <div className='Button__release'>
              <p onClick={openModal}>Очки рейтинга</p>
              <span>Преврать алмазы в рейтинг</span>
            </div>
          </div>
          <img src={ArrowRight} alt='icon' />
        </button>
      </div>
      <ModalElement
        elements={'ewrwe'}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        name={'Очки рейтинга'}
        title={
          'Конвертируйте ваши алмазы в очки рейтинга с соотношением 1 к  1. Чем больше очков рейтинга, тем выше лига'
        }
        coins={'💎555.555'}
        button={'Купить'}
      />
    </section>
  );
};

export default Shop;
