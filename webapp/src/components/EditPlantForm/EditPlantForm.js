import React, { Component } from "react";
import * as api from '../../modules/api';
import {Modal, Form, Nav} from 'react-bootstrap';

class EditPlantForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            desecription: "",
            season: "",
            plants: [],
            show: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setShow = this.setShow.bind(this);
        this.setHide = this.setHide.bind(this);
      }
    
    handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value 
    });
    }
        
    handleSubmit(event) {
        alert('Plants updating!');
        event.preventDefault();
        api.editPlant({
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            season: this.state.season,
        });
        this.setHide();
        alert('Plants Updated!');
    }

    setShow() {
        this.setState({show: true});
    }

    setHide() {
        this.setState({show: false});
    }

    render() {
        return (
        <>

        <Nav.Link onClick={this.setShow}>
            Edit Plant
        </Nav.Link>
        <Modal
                    show={this.state.show}
                    onHide={this.setHide}
                    backdrop="static"
                    keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Update Plant Info</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>
                        id:
                        <input
                        name="id"
                        type="string"
                        value={this.state.id}
                        onChange={this.handleInputChange} />
                    </Form.Label>
                    <br />
                    <Form.Label>
                        Name:
                        <input
                        name="name"
                        type="string"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                    </Form.Label>
                    <br />
                    <Form.Label>
                    Description:
                    <input
                        name="description"
                        type="string"
                        value={this.state.description}
                        onChange={this.handleInputChange} />
                    </Form.Label>
                    <br />
                    <Form.Label>
                    Season:
                    <input
                        name="season"
                        type="string"
                        value={this.state.season}
                        onChange={this.handleInputChange} />
                    </Form.Label>
                    <br />
                    <input type="submit" value="Submit" />
                </Form>
            </Modal.Body> 
        </Modal>
        </>
        )
    }
}


export default EditPlantForm;
