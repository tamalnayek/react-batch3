
import React from 'react';
import { connect } from 'react-redux'

const CartBadge = (props) => {
    let { cart } = props;
    return (
        <div>
            <i className="fa fa-shopping-cart"></i> {cart.length} item(s) in cart
        </div>
    );
};

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartBadge);
