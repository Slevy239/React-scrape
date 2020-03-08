import React from "react";
import { Container } from "../Grid";

// BookList renders a bootstrap list item
export function List({ children }) {
  return (
    <ul className="list-group">{children}</ul>
  );
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export class ListItem extends React.Component {

  render() {
    console.log(this.props);
    return (
      <li>
        <Container className='card-container'>
          <div className='card' id={this.props.id}>

            <h3 className='card-title'>{this.props.homeName} vs. {this.props.awayName}</h3>
            <h4 className='card-title'>Start Time: {this.props.matchTime}</h4>

          </div>
        </Container>
      </li>
    );
  }
}
