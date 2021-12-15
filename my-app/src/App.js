import './App.css';
import * as React from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './routes/Home';
import TicTacToe from './routes/TicTacToe';
import Quiz from './routes/Quiz';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Mis Juegos</h1>
      </header>
      <nav className="nav nav-tabs" role="tablist">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tictactoe">TicTacToe</NavLink>
          </li>
          <li>
            <NavLink to="/quiz">Quiz</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
