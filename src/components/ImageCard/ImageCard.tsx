import React, { FC } from 'react';
import styles from './ImageCard.module.css';
import { ImageCardProps, OpenModal } from '../../types';

const ImageCard: FC<ImageCardProps> = ({
  small,
  regular,
  firstName,
  location,
  totalLikes,
  description,
  openModal,
}) => {
  return (
    <div>
      <img
        className={styles.img}
        src={small}
        alt={description}
        onClick={() =>
          openModal(regular, firstName, location, totalLikes, description)
        }
      />
    </div>
  );
};

export default ImageCard;
