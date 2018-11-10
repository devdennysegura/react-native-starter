import { TEST_CALLBACK } from './types'

export const testAction = (value: any): any => {
    return { type: TEST_CALLBACK, payload: value }
}