import React from 'react';
import Button from './components/Button/Button';
import Logo from './components/Logo/Logo';
import Hero from './components/Hero/Hero';
import './App.css';
import Main from './components/Main/Main';
import SellingPoints from './components/SellingPoints/SellingPoints';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Button
          text="Pre-order now"
          type='secondary'
        />
      </header>
      <Hero />
      <Main />
      <SellingPoints />
      <Footer />
    </div>
  );
}

export default App;
