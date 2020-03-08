import React, { Component } from 'react';
import Jumbo from '../components/Jumbo/Jumbo'
import Form from '../components/Form/Form'
// import { List, ListItem } from "../components/List";
import axios from 'axios'

class Home extends Component {
    state = {
        searchRes: [],
        query: "",
        results: []
    }
    displayRes = data => {
        this.setState({ data: data.items })
    }
    searchAPI = () => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${
            this.state.query
            }`;
        axios
            .get(url)
            .then(res => {
                //console.log(res);
                this.displayRes(res.data);
            })
            .catch(err => console.log(err));
    };

    handleInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <Jumbo />
                <Form />
                {/* <List /> */}
            </div>
        )
    }
}


export default Home