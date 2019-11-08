import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Sample</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header> */}

      <Header></Header>
    </div>
  );
}

export default App;
