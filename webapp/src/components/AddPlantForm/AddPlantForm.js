import React, { Component } from "react";
import * as api from '../../modules/api';
//import Nav from 'components/Nav'
import {Container, Row, Col, Table, Form} from 'react-bootstrap';

class AddPlantForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          desecription: "",
          season: "",
          plants: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    alert('Plants sent!');
    event.preventDefault();
    api.createPlant({
        name: this.state.name,
        description: this.state.description,
        season: this.state.season,
    });
    }

    render() {
        return (
        <Container>
            <Row>
                <Col md={{span:4, offset:4 }}>
                    <h1>Enter Plants Info</h1>
                </Col>
            </Row>
        
            <Row>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>
                        Name of the plants:
                        <input
                        name="name"
                        type="string"
                        checked={this.state.name}
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
                    Season of the plant:
                    <input
                        name="season"
                        type="string"
                        value={this.state.season}
                        onChange={this.handleInputChange} />
                    </Form.Label>
                    <br />
                    <input type="submit" value="Submit" />
                </Form>
            </Row>  
        </Container>
        )
    }
}


export default AddPlantForm;
