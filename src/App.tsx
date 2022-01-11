import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Section from './components/Section';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Section cardQuantity={2}/>
      <Section cardQuantity={4}/>
      <Section cardQuantity={3}/>
    </>
  );
}

export default App;
