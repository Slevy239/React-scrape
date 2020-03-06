import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';


class Jumbo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                    Live Scores
                    </Container>
                </Jumbotron>

            </div>
        )
    }
}

export default Jumbo