import React from "react";
import { Container, Row, Col } from "../Grid";

// BookList renders a bootstrap list item
export function List({children}) {
  return (
    <ul className="list-group">{children}</ul>
    );
}

  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export class ListItem extends React.Component{

    render(){
     console.log(this.props)
;    return (
      <li>
        <Container>
          <Row>
            <Col size="xs-8 sm-9">
              <h3>{this.props.homeTeam} vs. {this.props.awayTeam}</h3>
              {/* <p>
                {this.props.synopsis}
              </p>
              <a
                target="_blank"
                href={this.props.link}
                rel="noopener noreferrer"
              >
                Go to book!
              </a> */}
            </Col>
          </Row>
        </Container>
      </li>
    );
    }
  }
