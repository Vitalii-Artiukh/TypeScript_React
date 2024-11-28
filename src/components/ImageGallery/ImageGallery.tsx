import React, { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';
import { ImageProps } from '../../types';

const ImageGallery: FC<ImageProps> = ({ photos, openModal }) => {
  return (
    <ul className={styles.list}>
      {photos.map(image => (
        <li key={image.id} className={styles.item}>
          <ImageCard
            small={image.urls.small}
            regular={image.urls.regular}
            firstName={image.user.first_name}
            location={image.user.location}
            totalLikes={image.user.total_likes}
            description={image.alt_description}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
