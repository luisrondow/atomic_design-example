export function loadStarshipsRequest() {
    return {
        type: '@starships/LOAD_REQUEST',
    };
}

export function loadStarshipsSuccess(data) {
    return {
        type: '@starships/LOAD_SUCCESS',
        payload: { data },
    };
}
