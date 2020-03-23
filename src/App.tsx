import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
