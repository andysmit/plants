import React, { Component } from "react";
import * as api from './modules/api';
import logo from './logo.svg';
import './App.css';
//import Nav from 'components/Nav'
import {Container, Row, Col, Table, Form} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      desecription: "",
      season: "",
      plants: []
    };
    api.getPlants().then( data => {
      this.setState({plants: data});
    })
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

	<Row>
		<Col md={{span:4, offset:4 }}>
			<h1>Plants Data</h1>
		</Col>
	</Row>

	<Row>
		<Table striped bordered hover>
			<thead>
				<tr>
				 <th>id</th>
				 <th>Name</th>
				 <th>Description</th>
				 <th>Season</th>
				</tr> 
		   </thead>
			<tbody>
			  {this.state.plants.map((data, key) => {
				return (
				<tr>
					<th>{data.id}</th>
					<th>{data.name}</th>
					<th>{data.description}</th>
					<th>{data.season}</th>
				</tr>
				)
			  })}
			  </tbody>
		  </Table>
	  </Row>
  </Container>

    );
  }
}

export default App;
