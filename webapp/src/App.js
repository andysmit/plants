import React, { Component } from "react";
import * as api from './modules/api';
import logo from './logo.svg';
import './App.css';
import NavMod from './components/NavMod/NavMod'
import DisplayPlant from './components/DisplayPlants/DisplayPlants';
import { Container, Row, Col, Table, Form} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
<div>
  <NavMod></NavMod>
  
  <DisplayPlant></DisplayPlant>

</div>

    );
  }
}

export default App;
