import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Tabs from './components/Tabs';

function App() {

  return (
    <div className="App">
      <Header />
      <Tabs />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
