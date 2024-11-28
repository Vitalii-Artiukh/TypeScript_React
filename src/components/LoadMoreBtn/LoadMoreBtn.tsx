import React, { FC } from 'react';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import styles from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from '../../types';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ addNextPage }) => {
  return (
    <button className={styles.loadMoreBtn} type="button" onClick={addNextPage}>
      <IoCloudDownloadOutline />
      {'  '}Load more
    </button>
  );
};

export default LoadMoreBtn;
