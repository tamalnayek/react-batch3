import React, { Component } from 'react';
import './ActionButton.css';
class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    incrementCount() {
        this.setState({ count: this.state.count + 1 }, () => {
            let { onAction, value } = this.props;
            let { count } = this.state;
            if (onAction)
                onAction(count * value)
        });
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        let className = value < 0 ? 'btn btn-danger' : 'btn btn-success';
        return (
            <div className="action-button">
                <div className="card card-default">
                    <div className="card-body">
                        <button onClick={e => this.incrementCount()} className={className}>{value}</button>
                        &nbsp;
                    &mdash; <span className="badge badge-danger">{count}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionButton;