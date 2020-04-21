import React, { useState, useEffect } from "react";
import { Spinner, CardGroup } from "react-bootstrap";
import { SPACEX_ROADSTER_URL } from "../../constants/api";
import SpacexCard from './SpacexCard';

export function SpacexRocket() {
  const [roadster, setRoadster] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SPACEX_ROADSTER_URL)
      .then(response => response.json())
      .then(json => setRoadster(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="h-100 align-middle text-center"><Spinner animation="border" variant="primary" /></div>;
  }

  return (
    <CardGroup>
      <div>
        <SpacexCard rocket_name={roadster.name} description={roadster.details} wikipedia={roadster.wikipedia} />
      </div>
    </CardGroup>
  );
}

export default SpacexRocket;