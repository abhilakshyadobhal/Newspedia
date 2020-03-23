import React from 'react';
import styles from './styles.module.scss';

const Header = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fetchNews = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await getTopNewHeadLines();
  //     console.log(res);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchNews();
  // }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>NewsPedia</div>
        <div>dasdasf assadf</div>
      </nav>
    </header>
  );
};

export default Header;
