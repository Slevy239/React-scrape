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

    
    displayRes = data => {
        this.setState({ results: data.items })
    }
    handleInput = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }
    searchAPI = () => {
        console.log('clicked')
        const key = '3872ef922fdc7b4bc5f2921a05246757'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&appid=` + key
        axios.get(url)
            .then(res => {
                this.displayRes(res.data)
            })
            .catch(err => console.log(err))
    }
    render() {
        // console.log(this.state.results.visibility)
        // console.log(this.state.search)
        return (
            <div>
                <Row>
                    <Grid>
                        <form noValidate autoComplete='off'>
                            <TextField
                                name='search'
                                onChange={this.handleInput}
                            />
                            <button type='button' onClick={this.searchAPI} >
                                Search
                             </button>
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