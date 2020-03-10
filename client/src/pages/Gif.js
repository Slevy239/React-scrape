import React, { Component } from 'react';
// import { Row, Col } from '../components/Grid'
import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent';
import { List, ListItem } from "../components/List";
import TextField from '@material-ui/core/TextField';
// import Search from '../components/Search';
import GifapiSearch from '../components/GifapiSearch/GifSearch';
// import Trending from '../components/Trending';
import Loader from '../components/Gifsearch/loader'


class Gif extends Component {
    constructor(props){
        super(props);
        this.state = {
            loader : false,
            searchText : '',
            gif : {},
        };
    }

    searchGif(searchText) {
        this.setState({
            loader: true
        });
        this.getUrl(searchText, gif => { // callback(myJson)
            const getDetails = {
                image : gif.data.fixed_height_downsampled_url,
                title :  gif.data.title,
                gifUrl : gif.data.url
            }
            this.setState({
                loader : false,
                searchText: searchText,
                gif : getDetails
            });
        })
    }

    getUrl(searchText, callback) {
        const url = `http://api.giphy.com/v1/gifs/random?&tag=${searchText}&api_key=aUhPqNQX1V9W5wSNJ9J0FOaQdvwgHH7O`
        fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(myJson => callback(myJson))
    }

    render() {
        return (
            <div className="container">
                <h1 className="inscApp">The GIF Search </h1>
                <GifapiSearch
                    onSearch={this.searchGif.bind(this)}
                />
                <Loader
                    loader={this.state.loader}
                    data={this.state.gif}
                />
                {/* <Trending /> */}
            </div>
        );
    }
}

export default Gif