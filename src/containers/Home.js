import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as StarshipsActions from "../store/modules/starships/actions";

import HomeComponent from '../components/Home';

function Home() {
    const [starships, setStarships] = useState([]);
    const [MGLTDistance, setMGLTDistance] = useState('');

    const loadedStartships = useSelector((state) => state.starships);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(StarshipsActions.loadStarshipsRequest());
    }, [dispatch]);

    const handleDistance = (value) => {
        if (value !== '' && !Number(value)) {
            return;
        }

        setMGLTDistance(value);
    };

    const onSearch = (event) => {
        event.preventDefault();

        const starshipStops = loadedStartships.map(({ name, model, resource }) => ({
            name,
            model,
            stops: Math.floor(MGLTDistance / resource),
        }));

        setStarships(starshipStops);
    }

    return <HomeComponent searchValue={MGLTDistance} setSearchValue={handleDistance} onSearch={onSearch} starships={starships} />
}

export default Home;