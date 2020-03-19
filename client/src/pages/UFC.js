import React, { Component } from 'react'
import axios from 'axios';

class UFC extends Component {
    state = {
        results: []
    }

    displayRes = data => {
        this.setState({ results: data })
    }

    searchAPI = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const url = proxyurl + 'https://api.sportradar.us/ufc/trial/v2/en/rankings.json?api_key=vu2y48dqrqwckk3jp2gu5pes'
        axios.get(url)
            .then(res => {
                this.displayRes(res.data.rankings[0])
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.results)
        return (
            <div>
                <button onClick={this.searchAPI}>button</button>
                {(!this.state.results) ?
                    <div>nothing to show!</div>
                    :
                    <div>
                        <div>{this.state.results.name.split('_')}</div>
                        {/* {this.state.results.rankings.map(result => {
                            return (
                                <div>{result.year}</div>
                            )

                        })} */}
                    </div>
                }
            </div>
        )
    }
}
export default UFC









const url = 'https://api.sportradar.us/ufc/trial/v2/en/rankings.json?api_key=vu2y48dqrqwckk3jp2gu5pes'