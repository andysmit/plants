import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Table, Form} from 'react-bootstrap';

class App extends Component {
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
    this.getPlants = this.getPlants.bind(this)
  }
  componentDidMount(){
		this.getPlants();
	}

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
       [name]: value 
    });
  }
	getPlants() {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    }
    fetch("http://localhost:8080/plants", requestOptions)
      .then(response => response.json())
      .then((data) => {
        this.setState({plants: data})
        console.log(this.state.ducks)
      })
      .catch(error => console.log('error', error));
	}
    
  handleSubmit(event) {
    alert('Duck data sent!');
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        'name': this.state.name,
        'description': this.state.description,
        'season': this.state.season,
      })
    }	
    fetch("http://localhost:8080/plants", requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));
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
