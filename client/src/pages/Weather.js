import React, { Component } from 'react';
import axios from 'axios';
import { Row } from '../components/Grid'
import Grid from '@material-ui/core/Grid'
// import Typography from '@material-ui/core/Typography'
// import EmptyList from '../components/EmptyList';




class Weather extends Component {
    state = {
        results: []
    }

    // componentDidMount() {
    //     this.searchAPI();
    // }
    displayRes = data => {
        this.setState({ results: data })
    }

    searchAPI = () => {
        const key = '3872ef922fdc7b4bc5f2921a05246757'
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=philadelphia&appid=' + key
        axios.get(url)
            .then(res => {
                this.displayRes(res.data)
            })
            .catch(err => console.log(err))
    }
    render() {
        console.log(this.state.results)
        return (
            <div>
                <Row>
                    <Grid>
                        <button onClick={this.searchAPI}>Search</button>
                        <div>{this.state.results.name}</div>

                    </Grid>
                </Row>

            </div>
        )
    }
}
export default Weather