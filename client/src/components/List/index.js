import React from "react";
import { Container } from "../Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import Moment from 'react-moment'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// BookList renders a bootstrap list item
export function List({ children }) {
  return (
    <ul className="list-group" >{children}</ul>
  );
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export class ListItem extends React.Component {
  render() {
    console.log(this.props);
    return (
      <li>
        <Container className='card-container'>
          <Card id={this.props.id}>
            <CardContent>

              {/* <h3 className='card-title'>{this.props.homeName} vs. {this.props.awayName}</h3> */}
              <Typography>{this.props.teams.join(' vs. ')}</Typography>
              <Typography className='card-title'><strong>Start Time:</strong> <Moment fromat='YYYY/MM/DD' unix>{this.props.commence_time}</Moment></Typography>
              <Typography className='card-body'><strong>Home Team:</strong> {this.props.home_team}</Typography>
              <Typography className='card-body'> <strong>{this.props.sites[1].site_nice}</strong> <span> Away Team Odds: {Math.round((-100) / (this.props.sites[1].odds.h2h[1] - 1))}</span></Typography>

            </CardContent>
          </Card>
        </Container>
      </li>
    );
  }
}
