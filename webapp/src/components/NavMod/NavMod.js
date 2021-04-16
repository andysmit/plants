import React, { Component } from "react";
//import Nav from 'components/Nav'
import AddPlantForm from '../AddPlantForm/AddPlantForm';
import EditPlantForm from '../EditPlantForm/EditPlantForm';
import RemovePlant from '../RemovePlant/RemovePlant';
import {Modal, Form, Navbar, Nav, FormControl, Button} from 'react-bootstrap';

class NavMod extends Component {

    render() {
        return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Plants</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Item>
                <AddPlantForm></AddPlantForm> 
            </Nav.Item>
            <Nav.Item>
                <EditPlantForm></EditPlantForm>
            </Nav.Item>
            <Nav.Item>
                <RemovePlant></RemovePlant>
            </Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        )
    }
}


export default NavMod;
