import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Hacker Meet</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link to="/">Login</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link to="/signup">Signup</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link to="/home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link to="/Users">Users</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link to="/Groups">Groups</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link to="/settings">Settings</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)