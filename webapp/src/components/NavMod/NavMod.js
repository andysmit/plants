import React, { Component } from "react";
//import Nav from 'components/Nav'
import {NavDropdown, Form, Navbar, Nav, FormControl, Button} from 'react-bootstrap';

class NavMod extends Component {

    render() {
        return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Plants</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Create Plant</Nav.Link>
            <Nav.Link href="#link">Edit Plant</Nav.Link>
            <Nav.Link href="#link">Remove Plant</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        )
    }
}


export default NavMod;
