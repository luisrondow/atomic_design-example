import { call, put, all, takeLatest } from 'redux-saga/effects';

import { api } from '../../../services/api';

import { resourceSpend } from '../../../utils';
import { loadStarshipsSuccess } from './actions';

function* loadStarships() {
    try {
        const response = yield call(api.get, '/starships');

        const { results } = response.data;

        const starships = results.map(({ name, model, consumables, MGLT }) => {
            const resource = resourceSpend(consumables, MGLT);
            return {
                name,
                model,
                resource,
            };
        });

        yield put(loadStarshipsSuccess(starships));
    } catch (error) {
        console.error(error);
    }
}

export default all([takeLatest('@starships/LOAD_REQUEST', loadStarships)]);
