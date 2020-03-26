import React from 'react';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>NewsPedia</div>
      </nav>
    </header>
  );
};

export default Header;
