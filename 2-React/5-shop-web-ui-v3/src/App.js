import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import CartBadge from './components/CartBadge';
import ViewCart from './components/ViewCart';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      isCartOpen: false,
      products: [
        {
          id: 111,
          name: 'Laptop',
          price: 1000.00,
          canBuy: true,
          image: 'images/Laptop.png',
          description: 'New Mac pro'
        },
        {
          id: 222,
          name: 'Mobile',
          price: 2000.00,
          canBuy: true,
          image: 'images/Mobile.png',
          description: 'New  pro'
        }
      ]
    }
  }

  toggleCart() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item)
    this.setState({ cart })
  }

  renderProducts() {
    let { products, isCartOpen, cart } = this.state;
    if (isCartOpen) return <ViewCart cart={cart} />
    else
      return products.map((product, idx) => {
        return (
          <div key={idx} className="list-group-item">
            <Product product={product} onBuy={item => this.addToCart(item, 1)} />
          </div>
        )
      })
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
            <ul class="nav nav-pills">
              <li class="nav-item">
                <Link class="nav-link" to="products">View-products</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="cart">View-cart</Link>
              </li>
            </ul>
            <hr />
            <Route path={"/"} exact={true} component={Dashboard} />
            <Route path={"/products"} render={() => this.renderProducts()} />
            <Route path={"/cart"} render={() => <ViewCart cart={cart} />} />
          </div>
        </Router>


      </div>
    );
  }
}

export default App;
