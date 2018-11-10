import { FETCHING_DATA, FETCH_CANCEL } from './types'
import { createAction } from './actions'
import { from, of } from 'rxjs'
import { map, catchError, takeUntil, mergeMap, filter } from 'rxjs/operators'

const service = {
    pdfToImage: { uri: 'https://pdfimage-dev.signplify.com/api/Convert/Pdf', method: 'POST' }
}
const getPromise = async ({ payload }) => {
    const basePath = service[payload.target]
    const headers = { 'Content-Type': 'application/json' }
    return new Promise((resolve, reject) => {
        fetch(basePath.uri, {
            method: basePath.method,
            body: JSON.stringify(payload.body),
            headers
        }).then(async (response: any) => {
            if (!response.ok) {
                const res = await response.json()
                throw Error(res.Message)
            }
            return response
        }).then(response => resolve(response.json()))
            .catch(error => reject(error.message))
    })
}
export default (action$) =>
    action$.pipe(
        filter((action: any) => action.type === FETCHING_DATA),
        mergeMap((action: any) => from(getPromise(action))
            .pipe(
                map(response => createAction(action.payload.success, response)),
                catchError(error => of(createAction(action.payload.failure, error))),
                takeUntil(action$.ofType(FETCH_CANCEL))
            ))
    )