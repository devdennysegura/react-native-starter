import { combineReducers } from 'redux'

import Test from './testReducer/reducer'

export default () => combineReducers({
    test: Test
})