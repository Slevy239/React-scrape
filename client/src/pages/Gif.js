import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from '../components/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia'
import EmptyList from '../components/EmptyList';
import { List, ListItem } from "../components/List";
import Image from 'react-bootstrap/Image'

class Gif extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gifs: { data: [] }
        };
    }

    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/trending?&api_key=tfZU03Q2B2QpE3Wn8OdWajo0JImv7arL&limit=10`)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then((result) => {
                this.setState({
                    gifs: result,
                });
            })
    }
    render() {
        // console.log(this.state.results[1])
        return (
            <div>
                <Row>
                    <Col size='md-12'>
                        <div id='gifs'>
                            <List>
                                {this.state.gifs.data.map(item => {
                                    return (
                                        <div id='item' key={item.id} className={item.key}>
                                            <Card variant='outlined'>
                                                <CardContent>
                                                    <div>
                                                        <img src={item.images.original.url} />
                                                        {/* <Image src={this.state.results[1].url} /> */}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    )
                                })}
                            </List>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }


}
export default Gif