import { createReducer } from '../config'
import { TEST_CALLBACK } from './types'

const initialState = {}
const testActionCallback = (state: any = initialState, { payload }): any => {
    return ({ ...state, ...payload })
}
const descriptor = {
    [TEST_CALLBACK]: testActionCallback
}
export default createReducer(initialState, descriptor)