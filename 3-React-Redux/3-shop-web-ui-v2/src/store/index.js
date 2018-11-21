

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'

import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

let middlewares = [thunk, sagaMiddleware];

export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares)
));

sagaMiddleware.run(rootSaga)