
import { LOAD_PRODUCTS } from '../constants'

export function loadProducts() {
    //..
    // let products = []
    // return { type: LOAD_PRODUCTS, products } // SYNC Action

    return function (dispatch) {
        let apiUrl = "http://localhost:8080/api/products";
        fetch(apiUrl)
            .then(response => response.json())
            .then(products => {
                dispatch({ type: LOAD_PRODUCTS, products }) // ASYNC action
            })
    }


}