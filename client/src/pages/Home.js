import React, { Component } from 'react';
import Jumbo from '../components/Jumbo/Jumbo'
// import Form from '../components/Form/Form'
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
        this.setState({ results: data })
        console.log(data[1].matchId)
    }
    searchApi = () => {
        const data = '2020-03-08'
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const key = '3565acccc37b8d4e713b04a23057ba44'
        let url = proxyurl + "https://api.the-odds-api.com/v3/odds?apiKey=" + key + "&sport=soccer_epl&region=uk";
        axios
            .get(url)
            .then(res => {
                console.log(res.data.data)
                this.displayRes(res.data.data);
            })
            .catch(err => console.log(err));
    };

    // handleInput = event => {
    //     const { name, value } = event.target;

    //     this.setState({
    //         [name]: value
    //     });
    // };
    // postToDb = (result) => {
    //     let dbResult = {
    //         home: result.homeTeam,
    //         homeScore: result.homeScore,
    //         away: result.awayTeam,
    //         awayScore: result.awayScore
    //     }
    //     axios.post('/api/results', dbResult)
    //         .then(() => alert("added scores to db"))
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <div>
                <Jumbo />

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
                                            <div id='item' key={result.sites.last_update} className={result.key}>
                                                <ListItem
                                                    key={result.sites.last_update}
                                                    teams={result.teams}
                                                    home_team={result.home_team}
                                                    commence_time={result.commence_time}
                                                    sites={result.sites}
                                                // awayName={result.awayName}
                                                // matchTime={result.matchTime}
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