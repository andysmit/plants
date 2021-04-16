import React, { Component } from "react";
import * as api from '../../modules/api';
//import Nav from 'components/Nav'
import {Modal, Button, Form} from 'react-bootstrap';

class RemovePlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
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
        alert('Removing Plant!');
        event.preventDefault();
        api.removePlant({
            id: this.state.id,
        });
        this.setHide();
        alert('Plant Removed');
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

        <Button onClick={this.setShow}>
            Remove Plant
        </Button>
        <Modal
                    show={this.state.show}
                    onHide={this.setHide}
                    backdrop="static"
                    keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Remove Plant</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>
                        id of the plant:
                        <input
                        name="id"
                        type="string"
                        value={this.state.id}
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


export default RemovePlant;
