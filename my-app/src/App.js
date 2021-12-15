import './App.css';
import * as React from 'react';
import { Routes, Route, Link, NavLink} from "react-router-dom";
import Home from './routes/Home';
import TicTacToe from './routes/TicTacToe';
import Quiz from './routes/Quiz';

function App() {
  return (
    <div className="App">
      <h1>Mis Juegos</h1>
        <nav className="nav nav-tabs" role="tablist">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tictactoe">TicTacToe</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
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
