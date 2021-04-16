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
    this.getPlants = this.getPlants.bind(this)
  }
  componentDidMount(){
		this.getPlants();
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
    
  render() {
    return (
<Container>

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
