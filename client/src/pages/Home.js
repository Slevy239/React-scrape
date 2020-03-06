import React, { Component } from 'react';
import Jumbo from '../components/Jumbo/Jumbo'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Jumbo />
            </div>
        )
    }
}

export default Home