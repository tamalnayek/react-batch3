

import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants'


export function reviesReducer(state = {}, action) {

    switch (action.type) {
        case LOAD_REVIEWS: {
            let { reviews: newReviews, productId } = action;
            let existingReviews = state[productId] || [];
            let reviews = [...existingReviews, ...newReviews]
            return Object.assign({}, state, { [productId]: reviews })
        }
        case ADD_NEW_REVIEW: {
            let { review: newReview, productId } = action;
            let existingReviews = state[productId] || [];
            let reviews = [...existingReviews, newReview]
            return Object.assign({}, state, { [productId]: reviews })
        }
        default:
            return state;
    }

}