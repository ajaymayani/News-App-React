import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="/">News-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/business">Business</Nav.Link>
                            <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
                            <Nav.Link as={Link} to="/health">Health</Nav.Link>
                            <Nav.Link as={Link} to="/science">Science</Nav.Link>
                            <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
                            <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;