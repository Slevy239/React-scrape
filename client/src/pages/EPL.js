import React, { Component } from 'react';
// import Jumbo from '../components/Jumbo/Jumbo'
// import Form from '../components/Form/Form'
import { List, ListItem } from "../components/List";
import axios from 'axios'
import EmptyList from '../components/EmptyList';
import { Row } from "../components/Grid";
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
// import PageNum from '../components/PageNum/pages'

class EPL extends Component {
    state = {
        searchRes: [],
        query: "",
        results: [],
        savedResults: []
    }

    componentDidMount() {
        this.getResults();
    }
    getResults = () => {
        axios.get('/api/results')
            .then(res => {
                this.setState({ savedResults: res.data })
            })
            .catch(err => console.log(err))
        console.log(this.state.savedResults)
    }

    displayRes = data => {
        this.setState({ results: data })
        console.log(data[0].home_team)
    }

    postToDB = (results) => {
        let dbResults = {
            sport_key: results.sport_key,
            teams: results.teams,
            home_team: results.home_team,
            sites: results.sites
        }
        axios.post("/api/results", dbResults)
            .then(() => alert('added'))
            .catch(err => console.log(err))
    }
    searchApi = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const key = '3565acccc37b8d4e713b04a23057ba44'
        let url = proxyurl + "https://api.the-odds-api.com/v3/odds?apiKey=" + key + "&sport=soccer_epl&region=uk";
        axios
            .get(url)
            .then(res => {
                console.log(res.data.data)
                this.displayRes(res.data.data);
                this.postToDB(this.props);
            })
            .catch(err => console.log(err));
    };



    render() {
        return (
            <div>

                <Row>
                    <Grid >
                        <Typography variant="h3" component="h2" id='header'>English Premier Leage</Typography>
                        <div>
                            {/* <input id='scoreQ' className='form-control form-control-lg' autoComplete='off' type='text' name='query' onChange={this.handleInput} /> */}
                            <div id='submit'>
                                <div className='col'>
                                    <Button type='submit' variant='contained' color='primary' onClick={this.searchApi}>
                                        Search For Games
                                    </Button>                                </div>
                            </div>
                            <Grid >
                                {(this.state.results && this.state.results.length > 0) ?
                                    <List id='results'>
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
                                                    >
                                                    </ListItem>

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
                            </Grid>
                        </div>
                    </Grid>
                </Row>
            </div>
        )
    }
}


export default EPL