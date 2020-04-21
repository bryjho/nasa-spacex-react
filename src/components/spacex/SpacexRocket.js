import React, { useState, useEffect } from "react";
import { Spinner, CardGroup } from "react-bootstrap";
import { SPACEX_ROCKETS_URL } from "../../constants/api";
import SpacexCard from './SpacexCard';

export function SpacexRocket() {
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SPACEX_ROCKETS_URL)
      .then(response => response.json())
      .then(json => setRockets(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="h-100 align-middle text-center"><Spinner animation="border" variant="primary" /></div>;
  }

  return (
    <CardGroup>
      {rockets.map(rocketInfo => {
        const { id, rocket_name, description, wikipedia } = rocketInfo;

        return (
          <div key={id}>
            <SpacexCard rocket_name={rocket_name} description={description} wikipedia={wikipedia} />
          </div>
        );
      })}
    </CardGroup>
  );
}

export default SpacexRocket;