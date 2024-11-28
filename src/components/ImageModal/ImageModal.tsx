import React, { FC } from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

interface ImageModalProps {
  largeImageUrl: string;
  isNameModal: string;
  isLocationModal: string;
  isLikesModal: number;
  descriptionModal: string;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({
  largeImageUrl,
  isNameModal,
  isLocationModal,
  isLikesModal,
  descriptionModal,
  modalIsOpen,
  closeModal,
}) => {
  return (
    <div>
      <Modal
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        bodyOpenClassName={styles.body}
        closeTimeoutMS={250}
      >
        <img
          className={styles.image}
          src={largeImageUrl}
          alt={descriptionModal}
        />
        <p className={styles.name}>
          Owner of the photo:{' '}
          <span className={styles.spanName}>
            {isNameModal}, from {isLocationModal}.
          </span>{' '}
          {isLikesModal} likes
        </p>
        <p className={styles.description}>{descriptionModal}</p>
      </Modal>
    </div>
  );
};

export default ImageModal;
