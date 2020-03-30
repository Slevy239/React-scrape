import React, { Component } from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button'

class UFC extends Component {
    state = {
        results: []
    }

    displayRes = data => {
        this.setState({ results: data })
    }

    searchAPI = () => {
        console.log("clicked")
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const url = proxyurl + 'https://api.sportradar.us/ufc/trial/v2/en/rankings.json?api_key=vu2y48dqrqwckk3jp2gu5pes'
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
                <Button 
                variant='contained'
                color='primary'
                onClick={this.searchAPI}>button</Button>
                {(!this.state.results) ?
                    <div>nothing to show!</div>
                    :
                    <div>
                        <div>{this.state.results.generated_at}</div> 
                    </div>
                }
            </div>
        )
    }
}
export default UFC









// const url = 'https://api.sportradar.us/ufc/trial/v2/en/rankings.json?api_key=vu2y48dqrqwckk3jp2gu5pes'