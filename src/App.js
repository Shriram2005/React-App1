import './App.css';
import React from 'react';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TicTacToe />
      <Footer />
    </div>
  );
}

export default App;
