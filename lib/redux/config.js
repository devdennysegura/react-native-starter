import Sugar from 'sugar';
export const createReducer = (initialState, descriptor) => {
    if (!Sugar.Object.isObject(descriptor) || Sugar.Object.isEmpty(descriptor)) {
        throw new Error('Expected a reducer description as an object.');
    }
    return (state = initialState, action) => {
        const handler = descriptor[action.type];
        if (!handler && !action.type) {
            console.warn(`Handling an action without type: ${JSON.stringify(action)}`);
        }
        return (handler && handler(state, action)) || state;
    };
};
