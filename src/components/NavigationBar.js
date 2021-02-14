import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useAuth } from "../contexts/AuthContext"

const Styles = styled.div`
  .navbar {
    background-color: #2D3B4F;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #ECF7FD;
    &:hover {
      color: #FFFFFF;
    }
  }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Hacker Meet</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" >
                    <Nav.Item><Link to="/" className="nav-link">Home</Link></Nav.Item>
                    <Nav.Item><Link to="/chat" className="nav-link">Chat</Link></Nav.Item>
                    <Nav.Item><Link to="/users" className="nav-link">Users</Link></Nav.Item>
                    <Nav.Item><Link to="/groups" className="nav-link">Groups</Link></Nav.Item>
                    <Nav.Item><Link to="/settings" className="nav-link">Settings</Link></Nav.Item>
                    <Nav.Item><Link to="/logout" className="nav-link">Logout</Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)