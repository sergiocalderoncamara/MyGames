import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { LangContext } from './App';
import LangSelector from './LangSelector';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function Menu(props) {

    const lang = useContext(LangContext);

    return (
        <>
            <div className='titulo'>
                <h1 className='mygames'>{lang.dictionary["title"]}</h1>
                <LangSelector />
            </div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/tictactoe">TicTacToe</Nav.Link>
                            <Nav.Link href="/quiz">Quiz</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}