import * as React from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './routes/Home';
import TicTacToe from './routes/TicTacToe';
import Quiz from './routes/Quiz';

export default function Navbar (props) {
    return (
        <>
            <h1>Mis Juegos</h1>
            <nav className="nav nav-tabs" role="tablist">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/tictactoe">TicTacToe</NavLink></li>
                <li><NavLink to="/quiz">Quiz</NavLink></li>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </>
    );
}