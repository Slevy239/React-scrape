import React, { Component } from 'react';
// import Jumbo from '../components/Jumbo/Jumbo'
// import Form from '../components/Form/Form'
import { List, ListItem } from "../components/List";
import axios from 'axios'
import EmptyList from '../components/EmptyList';
import { Row, Col } from "../components/Grid";
import AddBtn from '../components/AddBtn';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'




class NBA extends Component {
    state = {
        searchRes: [],
        query: "",
        results: []
    }



    displayRes = data => {
        this.setState({ results: data })
        console.log(data[0].home_team)
    }
    searchApi = () => {

        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const key = '3565acccc37b8d4e713b04a23057ba44'
        let url = "https://api.the-odds-api.com/v3/odds?sport=basketball_nba&region=us&apiKey=" + key;
        axios
            .get(url)
            .then(res => {
                console.log(res.data.data)
                this.displayRes(res.data.data);
                // this.postToDB(this.props);
            })
            .catch(err => console.log(err));
    };



    render() {
        return (
            <div>
                <Row>
                    <Col size='md-12'>
                    <Typography variant="h3" component="h2" id='header'>National Basketball Association</Typography>
                        <div>
                            {/* <input id='scoreQ' className='form-control form-control-lg' autoComplete='off' type='text' name='query' onChange={this.handleInput} /> */}
                            <div id='submit'>
                                <div className='col'>
                                <Button type='submit' variant='contained' color='primary' onClick={this.searchApi}>
                                        Search For Games
                                    </Button>
                                  
                                </div>
                            </div>
                            {(this.state.results && this.state.results.length > 0) ?
                                <List>
                                    {this.state.results.map(result => {
                                        return (
                                            <div id='item' key={result.id} className={result.key}>
                                                <ListItem
                                                    key={result.id}
                                                    teams={result.teams}
                                                    home_team={result.home_team}
                                                    commence_time={result.commence_time}
                                                    sites={result.sites}
                                                // awayName={result.awayName}
                                                // matchTime={result.matchTime}
                                                />

                                                {/* <AddBtn
                                                    teams={result.teams}
                                                    home_team={result.home_team}
                                                    commence_time={result.commence_time}
                                                    sites={result.sites}
                                                /> */}
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


export default NBA