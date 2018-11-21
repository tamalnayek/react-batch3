


import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants'


export function loadReviews(productId) {
    //..
    // let reviews = []
    // return { type: LOAD_REVIEWS, reviews, productId }

    return function (dispatch) {
        let apiUrl = `http://localhost:8080/api/products/${productId}/reviews`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: LOAD_REVIEWS, reviews, productId }) // ASYNC action
            })
    }

}

export function addNewReview(review, productId) {
    //..
    return { type: ADD_NEW_REVIEW, review, productId }
}
