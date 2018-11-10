import { FETCHING_DATA, FETCH_CANCEL } from './types'

export const createAction = (type, value: any) => {
    return { type, payload: { value } }
}
export const generateFetch = (payload: any) => {
    return { type: FETCHING_DATA, payload }
}
export const cancelFetch = () => {
    return { type: FETCH_CANCEL }
}