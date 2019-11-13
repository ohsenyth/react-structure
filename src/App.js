import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div id="container">
        <Header></Header>
        <div id="content" className="App-content">
        
        </div>
      </div> 
    </div>
  );
}

export default App;
