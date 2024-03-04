import React from 'react';
import Modal from 'react-modal';
import '../App.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ModalElement = ({
  modalIsOpen,
  closeModal,
  name,
  title,
  coins,
  button,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <div className='Modal'>
        <div className='Modal__container'>
          <div className='Modal__container_title'>
            <div />
            <h2>{name}</h2>
            <p>{title}</p>
          </div>
          <div className='Modal__container_count'>
            <p>Кол-во</p>
            <div>MAX</div>
          </div>
        </div>
        <div className='Modal__content'>
          <div className='Modal__content_title'>
            <h3>Ваш баланс</h3>
            <span>{coins}</span>
          </div>
          <button>{button}</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalElement;
