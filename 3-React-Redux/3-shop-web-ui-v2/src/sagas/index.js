
import { all } from 'redux-saga/effects'

import { watchBuy } from './buy'

export default function* rootSaga() {
    yield all([
        watchBuy()
    ])
}