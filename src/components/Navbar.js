import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Coffee Shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/menu">
                            <Nav.Link>Menu</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/location">
                            <Nav.Link>Location</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/reviews">
                            <Nav.Link>Reviews</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/events">
                            <Nav.Link>Events</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
