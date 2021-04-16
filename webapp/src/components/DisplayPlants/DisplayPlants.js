import React, { Component } from "react";
import * as api from '../../modules/api';
//import Nav from 'components/Nav'
import {Container, Row, Col, Table, Form} from 'react-bootstrap';

class DisplayPlant extends Component {
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
        <Container>
            <Row>
                <Col md={{span:4, offset:4 }}>
                    <h1 className="text-center">Plants Catalogue</h1>
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
        )
    }
}


export default DisplayPlant;
