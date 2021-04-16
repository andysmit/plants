import React, { Component } from "react";
import * as api from './modules/api';
import logo from './logo.svg';
import './App.css';
import NavMod from './components/NavMod/NavMod'
import AddPlantForm from './components/AddPlantForm/AddPlantForm';
import DisplayPlant from './components/DisplayPlants/DisplayPlants';
import { Container, Row, Col, Table, Form} from 'react-bootstrap';


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
  }

  render() {
    return (
<div>
  <NavMod></NavMod>
  <AddPlantForm></AddPlantForm>
  <DisplayPlant></DisplayPlant>

</div>

    );
  }
}

export default App;
