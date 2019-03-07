import React, { Component } from 'react';
import './App.css';
import Parent from './components/Parent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Parent></Parent>
        </header>
      </div>
    );
  }
}

export default App;
