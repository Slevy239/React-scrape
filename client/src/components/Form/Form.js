import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));

// export default function BasicTextFields() {
//   const classes = useStyles();
class Form extends Component {
  // Setting the component's initial state
  state = {
    data: ''
  };
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  }
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      data: ''
    })
    console.log('')

  }
  render() {

    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={this.handleInputChange} value={this.state.data} 
          />
        </form>
        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>Submit</Button>
      </div>
    );
  }
}
export default Form;

