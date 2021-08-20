import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './styles.css';

const Header = () => {
    return (
        <Navbar fixed="top" expand="lg" className="container">
            <Container>
                <Navbar.Brand href="/">
                    YearBook
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/students">Students</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
