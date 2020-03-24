import React from 'react';
import errorImage from '../../public/images/error.jpg';
import styles from './styles.module.scss';

const Error = () => {
  return (
    <div className={styles.errorWrapper}>
      <img src={errorImage} alt='loading' />
      <h2>Some Error Occured !</h2>
    </div>
  );
};

export default Error;
