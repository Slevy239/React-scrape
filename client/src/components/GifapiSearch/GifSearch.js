import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class GifApiSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange(event) {
        const searchText = event.target.value;
        this.setState({
            value: searchText
        });
        if (searchText.length > 2) {
            this.props.onSearch(searchText)
        }
    }

    handleKeyUp(event) {
        if (event.keyCode === 13) {
            this.props.onSearch(this.state.searchText)
        }
    }

    render() {
        return (
            <div className="search">
                <TextField type="text"
                    variant='outlined'
                    id='outlined-basic'
                    autoComplete='off'
                    onChange={this.handleChange.bind(this)}
                    onKeyUp={this.handleKeyUp.bind(this)}
                    label="Search"
                    value={this.state.value}
                />
            </div>
        );
    }
}

export default GifApiSearch