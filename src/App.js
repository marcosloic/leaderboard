import React, { Component } from 'react';
import './App.css';
import Leaderboard from './features/leaderboard/Leaderboard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Leaderboard />
      </div>
    );
  }
}

export default App;
