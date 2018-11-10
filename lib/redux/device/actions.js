import { DEVICE_DATA_CHANGE, DEVICE_KEY_ADDED, NOTIFICATION_RECEIVED, LOGOUT } from './types';
export const changeData = (value) => {
    return { type: DEVICE_DATA_CHANGE, payload: value };
};
export const addKey = (target, value) => {
    return { type: DEVICE_KEY_ADDED, payload: { target, value } };
};
export const notificationBadge = (target, value) => {
    return { type: NOTIFICATION_RECEIVED, payload: { target, value } };
};
export const logout = () => {
    return { type: LOGOUT };
};
