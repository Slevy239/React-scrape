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
    state = {
        searchRes: [],
        query: "",
        results: []
    }

    componentDidMount() {
        this.searchApi();
    }

    displayRes = data => {
        this.setState({ results: data })
        // console.log(data)
    }
    searchApi = () => {
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const key = 'tfZU03Q2B2QpE3Wn8OdWajo0JImv7arL';
        let url = 'https://api.giphy.com/v1/gifs/trending?api_key=' + key
        axios
            .get(url)
            .then(res => {
                // console.log(res.data.data[0].url);
                this.displayRes(res.data.data)
            })
            .catch(err => console.log(err));
    }
    render() {
        console.log(this.state.results[1])
        return (
            <div>
                <Row>
                    <Col size='md-12'>
                        <div id='gifs'>
                            {(this.state.results && this.state.results.length > 0) ?
                                <List>
                                    {this.state.results.map(result => {
                                        return (
                                            <div id='item' key={result.id} className={result.key}>
                                                <Card variant='outlined'>
                                                    <CardContent>
                                                        <div>
                                                            <img src={this.state.results[1].url}/>
                                                            {/* <Image src={this.state.results[1].url} /> */}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        )
                                    })}
                                </List>
                                :
                                <EmptyList />
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }


}
export default Gif