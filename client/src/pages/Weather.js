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

    // componentDidMount() {
    //     this.searchAPI();
    //     // this.getDb();
    // }
    displayRes = data => {
        this.setState({ results: data.items })
    }
    // getDb = () => {
    //     axios.get("/api/results")
    //         .then(res => {
    //             this.setState({ db: res.data })
    //         })
    //         .catch((err => console.log(err)))
    // }
    handleInput = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }
    searchAPI = () => {
        const key = '3872ef922fdc7b4bc5f2921a05246757'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&appid=` + key
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
                            <TextField
                                name='search'
                                onChange={this.handleInput}
                            />
                            <button type="submit" className="btn btn-danger" onClick={this.searchAPI} >
                                Search for Books
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