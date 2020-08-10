import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import Carousel from './components/Carousel';
import StepForm from './components/StepForm';

function App() {

  return (
    <div className="App">
      <Header />
      <Tabs />
      <CardList />
      <Carousel /> 
      <StepForm />
      <Footer />
    </div>
  );
}

export default App;
