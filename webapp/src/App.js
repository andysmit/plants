import React, { Component } from "react";
import * as api from './modules/api';
import logo from './logo.svg';
import './App.css';
import NavMod from './components/NavMod/NavMod'
import DisplayPlant from './components/DisplayPlants/DisplayPlants';
import { Image, Container, Row} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
<div>
  <NavMod></NavMod>
  <Container>
    <Row className="justify-content-md-center">
    <Image  src="https://as2.ftcdn.net/jpg/02/80/85/65/500_F_280856586_fCCpdchzsbwEO6QD7ywn1gIkWjvTHEOn.jpg" fluid/>
    </Row>
  </Container>
  
  <DisplayPlant></DisplayPlant>

</div>

    );
  }
}

export default App;
