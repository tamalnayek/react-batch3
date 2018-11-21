import React, { Component } from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 1,
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
  changeTab(tabIndex) {
    this.setState({ tab: tabIndex })
  }
  renderBuyBtn(product) {
    if (product.canBuy) return <button className="btn btn-primary">buy</button>
    else return null;
  }
  renderTabPanel(product) {
    let { tab } = this.state;
    let panel;
    switch (tab) {
      case 1: {
        panel = (<div>{product.description}</div>); break;
      }
      case 2: {
        panel = (<div>Not Yet</div>); break;
      }
      case 3: {
        panel = (<div>None Yet</div>); break;
      } default:
        panel = null;
    }
    return panel;
  }
  renderProducts() {
    let { products, tab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={product.image} alt={product.name} className="img-fluid" />
            </div>
            <div className="col-3 col-sm-9 col-md-9">
              <h5>{product.name}</h5>
              <h6>&#8377;{product.price}</h6>
              {this.renderBuyBtn(product)}
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={e => this.changeTab(1)} className={tab === 1 ? 'nav-link active' : 'nav-link'}>Description</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(2)} className={tab === 2 ? 'nav-link active' : 'nav-link'}>Specification</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(3)} className={tab === 3 ? 'nav-link active' : 'nav-link'}>Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    let { product } = this.state;
    return (
      <div className="container">
        <Navbar title="online-shopping" />
        <hr />
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
