import React from 'react';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        Made By Abhilakshya with
        <span className={styles.coffeeSymbol}>&#x2615;</span>
      </div>
    </footer>
  );
};

export default Footer;
