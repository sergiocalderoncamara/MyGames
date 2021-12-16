import * as React from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <nav className="nav nav-tabs" role="tablist">
                <h1>Mis Juegos</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tictactoe">TicTacToe</NavLink>
                <NavLink to="/quiz">Quiz</NavLink>
            </nav>
        </>
    );
}