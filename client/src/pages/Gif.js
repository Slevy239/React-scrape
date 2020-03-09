import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from '../components/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import EmptyList from '../components/EmptyList';
import { List, ListItem } from "../components/List";

class Gif extends Component {
    state = {
        searchRes: [],
        query: '',
        results: []
    }
    componentDidMount() {
        this.searchApi();
    }

    displayRes = data => {
        this.setState({ results: data })
        console.log(data)
    }
    searchApi = () => {
        const key = 'tfZU03Q2B2QpE3Wn8OdWajo0JImv7arL';
        let url = 'https://api.giphy.com/v1/gifs/trending?api_key=' + key
        axios
            .get(url)
            .then(res => {
                console.log(res.data);
                this.displayRes(res.data)
            })
            .catch(err => console.log(err));
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Row>
                    <Col size='md-12'>
                        <div id='gifs'>
                            {(this.state.gifs && this.state.gifs.length > 0) ?
                                <List>
                                    {this.state.gifs.map(result => {
                                        return (
                                            <div id='item' key={result.id} className={result.key}>
                                                <Card variant='outlined'>
                                                    <CardContent>
                                                        <CardMedia
                                                        image={this.state.gifs.url}></CardMedia>
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