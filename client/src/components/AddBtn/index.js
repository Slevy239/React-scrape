  
import React from "react";
import Button from "../Button";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

class AddBtn extends React.Component{
 
    postToDB = (result) => {
      var dbResult = {
          teams: result.teams,
          commence_time: result.commence_time,
          home_team: result.home_team,
          sites: result.sites,
      }
      console.log(dbResult)

      axios.post("/api/results", dbResult)
          .then(() => alert("added To Db"))
          .catch(err => console.log(err))
  }

    render() {
        return (
          <div>
          <Button type="primary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Save To Database
        </Button>
        </div>
        );
    }
  }

  export default AddBtn;    