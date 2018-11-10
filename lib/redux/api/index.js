var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FETCHING_DATA, FETCH_CANCEL } from './types';
import { createAction } from './actions';
import { from, of } from 'rxjs';
import { map, catchError, takeUntil, mergeMap, filter } from 'rxjs/operators';
const service = {
    pdfToImage: { uri: 'https://pdfimage-dev.signplify.com/api/Convert/Pdf', method: 'POST' }
};
const getPromise = ({ payload }) => __awaiter(this, void 0, void 0, function* () {
    const basePath = service[payload.target];
    const headers = { 'Content-Type': 'application/json' };
    return new Promise((resolve, reject) => {
        fetch(basePath.uri, {
            method: basePath.method,
            body: JSON.stringify(payload.body),
            headers
        }).then((response) => __awaiter(this, void 0, void 0, function* () {
            if (!response.ok) {
                const res = yield response.json();
                throw Error(res.Message);
            }
            return response;
        })).then(response => resolve(response.json()))
            .catch(error => reject(error.message));
    });
});
export default (action$) => action$.pipe(filter((action) => action.type === FETCHING_DATA), mergeMap((action) => from(getPromise(action))
    .pipe(map(response => createAction(action.payload.success, response)), catchError(error => of(createAction(action.payload.failure, error))), takeUntil(action$.ofType(FETCH_CANCEL)))));
