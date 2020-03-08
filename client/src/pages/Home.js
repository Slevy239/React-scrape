import React, { Component } from 'react';
import Jumbo from '../components/Jumbo/Jumbo'
import Form from '../components/Form/Form'
import { List, ListItem } from "../components/List";
import axios from 'axios'
import EmptyList from '../components/EmptyList';
import { Row, Col } from "../components/Grid";




class Home extends Component {
    state = {
        searchRes: [],
        query: "",
        results: []
    }
    displayRes = data => {
        this.setState({ results: data.items })
    }
    searchApi = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const key = 'eJ4XG5aprdZx7ViJ'
        // var req = unirest("GET", "http://api.isportsapi.com/sport/basketball/schedule?api_key=" + key + "&leagueId=111")

        let url = proxyurl+"http://api.isportsapi.com/sport/basketball/schedule?api_key=" + key + "&leagueId=111";
        axios
            .get(url)
            .then(res => {
                this.displayRes(res.data);
                // console.log('res');
            })
            .catch(err => console.log(err));
    };

    handleInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <Jumbo />
                {/* <Form />
                <List /> */}
                <Row>
                    <Col size='md-12'>
                        <div>
                            <input id='scoreQ' className='form-control form-control-lg' autoComplete='off' type='text' name='query' onChange={this.handleInput} />
                            <div id='submit'>
                                <div className='col'>

                                    <button type='submit' className='btn btn-danger' onClick={this.searchApi}>
                                        Search For Scores
                                    </button>
                                </div>
                            </div>

                            {(this.state.results && this.state.results.length > 0) ?
                                <List>
                                    {this.state.results.map(result => {
                                        return (
                                            <div id='item'>
                                                <ListItem
                                                    key={result.id}
                                                />
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


export default Home