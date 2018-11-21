
import React from 'react';

const CartBadge = (props) => {
    let { cart } = props;
    return (
        <div>
            <i className="fa fa-shopping-cart"></i> {cart.length} item(s) in cart
        </div>
    );
};

export default CartBadge;