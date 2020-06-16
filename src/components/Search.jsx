import React from 'react';
import styled from "styled-components";

import searchIcon from '../assets/svg/submit-button.svg';

const Form = styled.form`
    width: 528px;
    max-width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #FBF8FD;
    border-radius: 8px;
    padding: 10px 15px;
`;

const Input = styled.input`
    width: 80%;
    background-color: #FBF8FD;
    border-color: transparent;

    font-size: 16px;
    color: #2D2B3C;
`;

const Button = styled.button`
    border: none;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`;

const Icon = styled.img``;

function Search({ value, setValue, onSubmit}) {
    return (
        <Form onSubmit={(e) => onSubmit(e)}>
           <Input placeholder="Qual a distância que deseja calcular?" value={value} onChange={e => setValue(e.target.value)} />
            <Button type="submit">
                <Icon src={searchIcon} />
            </Button>
        </Form>
    );
}

export default Search;