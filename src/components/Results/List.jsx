import React from 'react';
import styled from "styled-components";

import Item from './Item';

const Wrapper = styled.div`
    width: 528px;
    max-width: 90vw;
    margin-top: 32px;

    & > div:not(:first-child) {
        margin-top: 16px;
    }
`;

function List({ items }) {
    return <Wrapper>{items.map((item, index) => <Item key={index} {...item} />)}</Wrapper>
}

export default List;