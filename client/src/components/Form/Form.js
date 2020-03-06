import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
// import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    // lastName: "",
    // password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    this.setState({
      firstName: "",
      // lastName: "",
      // password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Search: {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <TextField id='outlined-basic' label='Input' variant='outlined' value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
            autoComplete='off' />
        </form>
      </div>
    );
  }
}

export default Form;
