import React from 'react';

function renderCartItems(cart) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>qty</td>
                <td>total</td>
            </tr>
        )
    })
}
const ViewCart = (props) => {
    let { cart } = props
    return (
        <div>
            <div className="row">
                <div className="col-8 col-sm-8 col-md-8">
                    <div className="card">
                        <div className="card-header">Items in cart</div>
                        <div className="card-body">
                            <table className="table table-bordered table-sm">
                                <tbody>
                                    {renderCartItems(cart)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCart;