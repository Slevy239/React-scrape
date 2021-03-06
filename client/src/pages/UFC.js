import React, { Component } from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import '../css/UFC.css'
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Drawer from '../components/Drawer/Drawer'

class UFC extends Component {
    state = {
        results: []
    }
    handleClick = (event) => {
        event.preventDefault();
        console.info("You cliked a breadcrumb.")
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
                this.displayRes(res.data.rankings[0].competitor_rankings)
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.results)
        return (
            <div>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={this.handleClick}>
                        SportsBook
                    </Link>
                    <Link color="inherit" href="/" onClick={this.handleClick}>
                        Rankings
                    </Link>
                    <Typography color="textPrimary">Pound for Pound</Typography>
                </Breadcrumbs>
                <br></br>
                <Paper elevation={10}>
                    <Typography variant="h3" component='h3'>
                        Pound for Pound
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
                                <a href={`https://www.google.com/search?q=${result.competitor.name}`}>
                                    <Typography variant='h7' component='h3'>
                                        {result.rank}.{result.competitor.name}
                                    </Typography>
                                </a>
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
export default UFC









// const url = 'https://api.sportradar.us/ufc/trial/v2/en/rankings.json?api_key=vu2y48dqrqwckk3jp2gu5pes'