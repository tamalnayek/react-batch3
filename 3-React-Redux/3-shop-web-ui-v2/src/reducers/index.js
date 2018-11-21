

import { productsReducer } from './products'
import { reviesReducer } from './reviews'
import { cartReducer } from './cart'

import { combineReducers } from 'redux'

export default combineReducers({
    products: productsReducer,
    reviews: reviesReducer,
    cart: cartReducer
})