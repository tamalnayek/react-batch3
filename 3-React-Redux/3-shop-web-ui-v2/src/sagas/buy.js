
import { delay } from 'redux-saga'
import { put, takeEvery,takeLatest } from 'redux-saga/effects'


// Our worker Saga: will perform the async increment task
export function* buyAsync(action) {
    yield delay(3000)
    yield put({ type: 'BUY_ASYNC' })
}

export function* watchBuy() {
    // yield takeEvery('BUY', buyAsync)
    yield takeLatest('BUY', buyAsync)
}