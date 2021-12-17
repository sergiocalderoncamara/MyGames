import React, { useContext } from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from './routes/Home';
import TicTacToe from './routes/TicTacToe';
import Quiz from './routes/Quiz';
import { LangContext } from './App';
import LangSelector from './LangSelector';

export default function Navbar(props) {

    const lang = useContext(LangContext);

    return (
        <>
            <div className='titulo'>
                <h1>{lang.dictionary["title"]}</h1>
                <LangSelector />
            </div>
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