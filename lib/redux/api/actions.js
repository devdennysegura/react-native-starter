import { FETCHING_DATA, FETCH_CANCEL } from './types';
export const createAction = (type, value) => {
    return { type, payload: { value } };
};
export const generateFetch = (payload) => {
    return { type: FETCHING_DATA, payload };
};
export const cancelFetch = () => {
    return { type: FETCH_CANCEL };
};
