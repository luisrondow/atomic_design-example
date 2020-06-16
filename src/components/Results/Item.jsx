import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #fbf8fd;
    border-radius: 8px;
    padding: 10px 15px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.span``;

const Model = styled.span`
    font-size: 10px;
    line-height: 12px;
    color: #868a93;
`;

const Stops = styled.span`
    text-align: end;
`;

function Item({ name, model, stops }) {
    return (
        <Container role="item">
            <Info>
                <Title>{name}</Title>
                <Model>{model}</Model>
            </Info>
            {stops > 0 ? (
                <Stops>{stops} Parada{ stops > 1 ? 's' : null}</Stops>
            ) : (
                <Stops>Nenhuma parada!</Stops>
            )}
        </Container>
    );
}

export default Item;
