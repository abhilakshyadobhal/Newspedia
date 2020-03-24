import React from 'react';
import loadingImage from '../../public/images/news.svg';
import styles from './styles.module.scss';
const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <img src={loadingImage} alt='loading' />
      <h2>Getting the top headlines for you...</h2>
    </div>
  );
};

export default Loader;
