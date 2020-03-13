import React from "react";
import { Container } from "../Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';



// BookList renders a bootstrap list item
export function List({ children }) {
  return (

    <ul className="list-group" >{children}</ul>

  );
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export class ListItem extends React.Component {
  render() {

    return (
      <li>
        <Container className='card-container col-6'>
          <Card id={this.props.id} variant='outlined'>
            <CardContent>

              <Typography><strong>{this.props.teams.join(' vs. ')}</strong></Typography>
              <Typography className='card-title'><strong>Start Time:</strong> <Moment fromat='YYYY/MM/DD' unix>{this.props.commence_time}</Moment></Typography>
              <Typography className='card-body'><strong>Home Team:</strong> {this.props.home_team}</Typography>
              <Typography className='card-body'> <strong>{this.props.sites[0].site_nice}</strong> <span>{this.props.teams[1]}:
              {(this.props.sites[0].odds.h2h[1] > 2.00) ?
                  Math.round(((this.props.sites[0].odds.h2h[1]) - 1) * 100)
                  :
                  Math.round((-100) / ((this.props.sites[0].odds.h2h[1]) - 1))
                }</span></Typography>

            </CardContent>
          </Card>
        </Container>
      </li>
    );
  }
}
