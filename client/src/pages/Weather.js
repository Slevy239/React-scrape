import React, { Component } from 'react';
import axios from 'axios';
import { Row } from '../components/Grid'
import Grid from '@material-ui/core/Grid'

import TextField from '@material-ui/core/TextField';


class Weather extends Component {
    state = {
        results: [],
        db: [],
        search: '',
        initialized: true
    }

    componentDidMount() {
        this.searchAPI();
        this.getDb();
    }
    displayRes = data => {
        this.setState({ results: data })
    }
    getDb = () => {
        axios.get("/api/results")
          .then(res => {
            this.setState({ db: res.data })
          })
          .catch((err => console.log(err)))
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
    console.log(this.state.results.visibility)
    console.log(this.state.search)
    return (
        <div>
            <Row>
                <Grid>
                    <form noValidate autoComplete='off'>
                        <TextField />
                    </form>
                    <div>{this.state.results.name}</div>
                    <div>{this.state.results.visibility}</div>

                </Grid>
            </Row>

        </div>
    )
}
}
export default Weather