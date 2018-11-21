import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        let apiUrl = 'http://0.0.0.0:8080/api/products';
        // XHR or Fetch
        fetch(apiUrl)
            .then(response => response.json())
            .then(products => {
                this.setState({ products })
            })
    } 
    renderProducts() {
        let { products } = this.state;
        return products.map((product, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product product={product} onBuy={item => this.addToCart(item, 1)} />
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

export default ProductList;