import { TEST_CALLBACK } from './types';
export const testAction = (value) => {
    return { type: TEST_CALLBACK, payload: value };
};
