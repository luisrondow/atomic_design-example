import React from 'react';
import styled from "styled-components";

import Search from './Search';
import List from './Results/List';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function Home({ searchValue, setSearchValue, onSearch, starships }) {
    return (
        <Container>
            <Search value={searchValue} setValue={setSearchValue} onSubmit={onSearch} />
            <List items={starships} />
        </Container>
    );
}

export default Home;