import React, { Component } from 'react';
// import axios from 'axios';
import { Row } from '../components/Grid'
import Grid from '@material-ui/core/Grid'
import China from '../utils/China'
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col'
// import CardContent from '@material-ui/core/CardContent';

class Virus extends Component {
    state = {
    }
    render() {
        console.log(China[0].name)
        return (
            <div>
                <Row>
                    <Grid>
                        {China.map(data => {
                            return (
                                <div className="row">
                                    <div className='col-4'><hr></hr></div>
                                    <div className='col-3'>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>
                                                    <strong>{data.name}</strong>
                                                </Card.Title>
                                       Population: {data.population}
                                                <br></br>
                                       Confirmed Cases: {data.confirmed}
                                                <br></br>
                                       Deaths: {data.deaths}
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                
                            )
                        })}
                    </Grid>
                </Row>
            </div>
        )
    }
}
export default Virus