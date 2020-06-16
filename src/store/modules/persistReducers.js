import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: 'nata.house.test',
            storage,
            whitelist: ['starships'],
        },
        reducers
    );

    return persistedReducer;
};
