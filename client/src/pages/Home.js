import React, { Component } from 'react';
import Jumbo from '../components/Jumbo/Jumbo'
import Form from '../components/Form/Form'
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
                <Form />
            </div>
        )
    }
}

export default Home