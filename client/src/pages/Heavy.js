import React, { Component } from 'react'
import axios from 'axios';
import Card from '@material-ui/core/Card'
import '../css/UFC.css'
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

class Heavy extends Component {
    state = {
        results: []
    }

    displayRes = data => {
        this.setState({ results: data })
    }
    componentDidMount = () => {
        this.searchAPI();
    }
    searchAPI = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const url = proxyurl + 'https://api.sportradar.us/ufc/trial/v2/en/rankings.json?api_key=vu2y48dqrqwckk3jp2gu5pes'
        axios.get(url)
            .then(res => {
                this.displayRes(res.data.rankings[8].competitor_rankings)
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.results)
        return (
            <div>
                <Paper elevation={10}>
                    <Typography variant="h3" component='h3'>
                        Heavy Weight Rankings
                </Typography>
                </Paper>

                <br></br>
                {/* <Button
                    variant='contained'
                    color='primary'
                    onClick={this.searchAPI}>button</Button> */}
                {this.state.results.map(result => {
                    return (
                        <div id='item' key={result.id} className={result.key}>
                            <Card>
                                <Typography variant='h7' component='h3'>
                                    {result.rank}.{result.competitor.name}
                                </Typography>
                            </Card>

                        </div>
                    )
                })}

                {/* {(this.state.results < 0) ?
                    <div>nothing to show!</div>
                    :
                    <div>
                        <div>{this.state.results}</div> 
                    </div>
                } */}
            </div>
        )
}
}

export default Heavy
