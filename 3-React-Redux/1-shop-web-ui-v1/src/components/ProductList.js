import React, { Component } from 'react';
import Product from './Product';

import { connect } from 'react-redux'
import { loadProducts } from '../actions/products'
import { bindActionCreators } from 'redux'

class ProductList extends Component {
    componentDidMount() {
        let { actions } = this.props;
        setTimeout(() => {
            actions.loadProducts();
        }, 2000)
    }
    renderProducts() {
        let { products } = this.props;
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


function mapStateToProps(state) {
    return {
        products: state.products
    }
}
function mapDispatchToProps(dispatch) {
    let actions = { loadProducts }
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
