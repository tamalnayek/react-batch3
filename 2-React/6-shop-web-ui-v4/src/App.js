import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import CartBadge from './components/CartBadge';
import ViewCart from './components/ViewCart';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductList from './components/ProductList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
    }
  }
 
  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }

  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <Navbar title="online-shopping" />
        <hr />
        <Router>
          <div>
            <CartBadge cart={cart} />
            <hr />
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="products">View-products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart">View-cart</Link>
              </li>
            </ul>
            <hr />
            <Route path={"/"} exact={true} component={Dashboard} />
            <Route path={"/products"} component={ProductList} />
            <Route path={"/cart"} render={() => <ViewCart cart={cart} />} />
          </div>
        </Router>


      </div>
    );
  }
}

export default App;
