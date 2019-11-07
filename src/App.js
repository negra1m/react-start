import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title={ "Mercado Livre" } />

      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
