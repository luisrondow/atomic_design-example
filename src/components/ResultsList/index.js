import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import { api } from "../../services/api";
import { resourceSpend } from "../../utils";

function ResultsList() {
  const [starships, setStarships] = useState([]);
  const [MGLTDistance, setMGLTDistance] = useState(null);

  const formatStarships = (starshipsResponse) => {
    const formatedStarships = starshipsResponse.map(
      ({ name, consumables, MGLT }) => {
        const resource = resourceSpend(consumables, MGLT);
        return {
          name,
          resource,
        };
      }
    );

    return formatedStarships;
  };

  useEffect(() => {
    async function loadStarships() {
      try {
        const { data } = await api.get("/starships");
        setStarships(formatStarships(data.results));
      } catch (error) {
        console.error(error);
      }
    }

    loadStarships();
  }, []);

  const handleDistance = (event) => {
    const { value } = event.target;

    setMGLTDistance(Number(value));
  };

  const handleSendDistance = () => {
    const starshipStops = starships.map(({ name, resource }) => ({
      name,
      stops: Math.floor(MGLTDistance / resource),
    }));

    setStarships(starshipStops);
  };

  return (
    <Container>
      <span>Digite</span>
      <input type="number" pattern="[0-9]*" onChange={handleDistance} />
      <button onClick={handleSendDistance}>Enviar</button>
      {JSON.stringify(starships)}
    </Container>
  );
}

export default ResultsList;
