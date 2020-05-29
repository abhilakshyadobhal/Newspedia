import React from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer';
import Main from '../components/Main';

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
