import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios"
// import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    searchRes: [],
    query: "",
    scores: []
  };

  displayRes = data => {
    this.setState({ sport: data.items })
  }
  searchApi = () => {
    const key = 'eJ4XG5aprdZx7ViJ'
    // var req = unirest("GET", "http://api.isportsapi.com/sport/basketball/schedule?api_key=" + key + "&leagueId=111")

    let url = "http://api.isportsapi.com/sport/basketball/schedule?api_key=" + key + "&leagueId=111";
    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.displayRes(res.data);
      })
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    //console.log("Query", this.state.query);
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Search: {this.state.firstName}
        </p>
        <form className="form">
          <TextField id='outlined-basic' label='Input' variant='outlined' 
            name="firstName"
            onChange={this.handleInput}
            type="text"
            placeholder="Search"
            autoComplete='off' />
          <button type='submit' className='btn btn-danger' onClick={this.searchApi}>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
