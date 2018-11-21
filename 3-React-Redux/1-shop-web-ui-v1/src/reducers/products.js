
import { LOAD_PRODUCTS, BUY } from '../constants'

export function productsReducer(state = [], action) {
    switch (action.type) {
        case LOAD_PRODUCTS: {
            return [...state, ...action.products]
        }
        // case BUY: {
        //     return state.splice(1, state.length - 1)
        // }
        default:
            return state;
    }
}