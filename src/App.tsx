import React from 'react';
import Button from './components/Button/Button';
import Logo from './components/Logo/Logo';
import './App.css';

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
    </div>
  );
}

export default App;
