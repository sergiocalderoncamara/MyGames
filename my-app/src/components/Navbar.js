import * as React from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <h1>Mis Juegos</h1>
            <nav className="nav nav-tabs" role="tablist">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/tictactoe">TicTacToe</NavLink></li>
                <li><NavLink to="/quiz">Quiz</NavLink></li>
            </nav>
        </>
    );
}