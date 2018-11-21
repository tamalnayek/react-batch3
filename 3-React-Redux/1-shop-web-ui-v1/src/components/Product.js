import React, { Component } from 'react';
import Review from './Review';


import { connect } from 'react-redux'
import { loadReviews } from '../actions/reviews'
import { buy } from '../actions/cart'
import { bindActionCreators } from 'redux'

class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tab: 1,
        }
    }

    changeTab(tabIndex) {
        this.setState({ tab: tabIndex }, () => {
            if (tabIndex === 3) {
                let { actions, product } = this.props;
                actions.loadReviews(product.id)
            }
        })
    }
    handleBuy(e) {
        let { product, actions } = this.props;
        actions.buy(product, 1)
    }

    renderBuyBtn(product) {
        if (product.canBuy) return <button onClick={e => this.handleBuy(e)} className="btn btn-primary">buy</button>
        else return null;
    }
    renderReviews() {
        let { reviews } = this.props;
        return reviews.map((review, idx) => {
            return <Review key={idx} review={review} />
        })
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
                panel = (<div>{this.renderReviews()}</div>); break;
            } default:
                panel = null;
        }
        return panel;
    }


    render() {
        let { product } = this.props;
        let { tab } = this.state;
        return (
            <div>
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
        );
    }
}


function mapStateToProps(state, props) {
    let productId = props.product.id;
    return {
        reviews: state.reviews[productId] || []
    }
}
function mapDispatchToProps(dispatch) {
    let actions = { loadReviews, buy }
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
