import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import './spacex-card.scss';

function GameCard({ rocket_name, description, wikipedia }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-dark">{rocket_name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <p><a href={wikipedia}>Read more about this SpaceX Technology on Wikipedia</a></p>
      </Card.Body>
    </Card>
  )
}

GameCard.propTypes = {
	id: PropTypes.number.isRequired,
	rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  wikipedia: PropTypes.string.isRequired,
};

export default GameCard;