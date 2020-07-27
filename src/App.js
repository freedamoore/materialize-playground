import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';

function App() {

  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
}

export default App;
