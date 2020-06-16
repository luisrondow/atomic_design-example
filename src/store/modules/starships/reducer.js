const INITIAL_STATE = {
    starships: null,
};

export default function starships(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@starships/LOAD_SUCCESS':
            return action.payload.data;
        default:
            return state;
    }
}
