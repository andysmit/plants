import React, { Component } from "react";
import * as api from '../../modules/api';
import {Container, Row, Col, CardColumns, Card} from 'react-bootstrap';

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
                <Col md={{span:6, offset:3 }}>
                    <h1 className="text-center">Plants Catalogue</h1>
                </Col>
            </Row>

            <Row className="mt-3">
                <CardColumns>
                    
                        
                            {this.state.plants.map((data, key) => {
                                return (
                                    <Card>
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Subtitle>id: {data.id}</Card.Subtitle>
                                        <Card.Subtitle>{data.season}</Card.Subtitle>
                                        <Card.Text>{data.description}</Card.Text>
                                    </Card.Body>
                                    </Card>
                                )
                            })}
                        
                    
                </CardColumns>
            </Row> 
        </Container>
        )
    }
}


export default DisplayPlant;
