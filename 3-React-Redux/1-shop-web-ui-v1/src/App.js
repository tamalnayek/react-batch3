import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import CartBadge from './components/CartBadge';
import ViewCart from './components/ViewCart';
import Dashboard from './components/Dashboard'
import ProductList from './components/ProductList'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="online-shopping" />
        <hr />
        <Router>
          <div>
            <CartBadge />
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
            <Route path={"/cart"} render={() => <ViewCart />} />
          </div>
        </Router>


      </div>
    );
  }
}


export default App;
