import React, { useState, useEffect } from "react";
import { Spinner, CardGroup } from "react-bootstrap";
import { SPACEX_DRAGONS_URL } from "../../constants/api";
import SpacexCard from './SpacexCard';

export function SpacexRocket() {
  const [dragons, setDragons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SPACEX_DRAGONS_URL)
      .then(response => response.json())
      .then(json => setDragons(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="h-100 align-middle text-center"><Spinner animation="border" variant="primary" /></div>;
  }

  return (
    <CardGroup>
      {dragons.map(dragonInfo => {
        const { id, name, description, wikipedia } = dragonInfo;

        return (
          <div key={id}>
            <SpacexCard rocket_name={name} description={description} wikipedia={wikipedia} />
          </div>
        );
      })}
    </CardGroup>
  );
}

export default SpacexRocket;