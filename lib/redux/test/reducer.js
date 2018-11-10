import { createReducer } from '../config';
import { DEVICE_DATA_CHANGE, DEVICE_KEY_ADDED, NOTIFICATION_RECEIVED, LOGOUT } from './types';
const initialState = {
    notification: {
        document: 0,
        profile: 0
    }
};
const changeData = (state = initialState, { payload }) => {
    return (Object.assign({}, state, payload));
};
const addKey = (state = initialState, { payload: { target, value } }) => {
    state[target] = value;
    return (Object.assign({}, state));
};
const notificationBadge = (state = initialState, { payload: { target, value } }) => {
    state.notification = state.notification || initialState.notification;
    state.notification[target] = value === 0 ? 0 : state.notification[target] + value;
    return (Object.assign({}, state));
};
const logout = () => {
    return (Object.assign({}, initialState));
};
const descriptor = {
    [DEVICE_DATA_CHANGE]: changeData,
    [DEVICE_KEY_ADDED]: addKey,
    [NOTIFICATION_RECEIVED]: notificationBadge,
    [LOGOUT]: logout
};
export default createReducer(initialState, descriptor);
