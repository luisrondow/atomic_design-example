import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, cleanup } from '@testing-library/react';

import Home from './Home';

afterEach(cleanup);

describe('Test Home component', () => {
    let emit;

    beforeAll(() => {
        ({ emit } = window._virtualConsole);
    });

    beforeEach(() => {
        window._virtualConsole.emit = jest.fn();
    });

    afterAll(() => {
        window._virtualConsole.emit = emit;
    });

    const mockstarships = [
        {
            name: "CR90 corvette", 
            model: "CR90 corvette", 
        }, 
        {
            name: "Star Destroyer", 
            model: "Imperial I-class Star Destroyer", 
        }, 
        {
            name: "Sentinel-class landing craft", 
            model: "Sentinel-class landing craft", 
        }
    ]

    it('Should render the right amount of subitems', () => {
        const mockData = mockstarships.map(({name, model}, i) => ({name, model, stops: 1 + i}));
    
        const { getAllByRole } = render(<Home searchValue={""} setSearchValue={jest.fn()} onSearch={jest.fn()} starships={mockData} />)
    
        const items = getAllByRole('item');
    
        expect(items).toHaveLength(3);
    });
    
    it('Should update the Search value', () => {
        let mockSearch = '1';
        const setMockSearch = (val) => mockSearch = val;
    
        const { getByPlaceholderText } = render(<Home searchValue={mockSearch} setSearchValue={setMockSearch} onSearch={jest.fn()} starships={[]}/>);
    
        const input = getByPlaceholderText('Qual a distância que deseja calcular?');
        fireEvent.change(input, { target: { value: '1000000' } });
    
        expect(mockSearch).toBe('1000000');
    });
    
    it('Should be able to handle the Search submission', () => {
        let starships = [];
        const onSearch = () => starships = mockstarships.map(({name, model}, i) => ({name, model, stops: 1 + i}));
    
        const { getByRole } = render(<Home searchValue={""} setSearchValue={jest.fn()} onSearch={onSearch} starships={starships} />);
    
        const submitBtn = getByRole('button');
        fireEvent.click(submitBtn);
    
        expect(starships).toHaveLength(3);
    });
});