import React, { Component } from 'react';
import ActionButton from './ActionButton';
import TotalCountDisplay from './TotalCountDisplay';

class CounterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCount: 0
        }
    }
    incrementTotalCount(v) {
        this.setState({ totalCount: this.state.totalCount + v });
    }
    renderActionButtons() {
        let numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10,-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]
        return numbers.map((n, idx) => <ActionButton value={n} onAction={v => this.incrementTotalCount(v)} key={idx} />)
    }
    render() {
        let { totalCount } = this.state;
        return (
            <div className="card card-default">
                <div className="card-header">Counter Box - <span className="badge badge-danger">{totalCount}</span> </div>
                <div className="card-body">

                    {
                        /* 
                        <ActionButton value={1} onAction={(v) => this.incrementTotalCount(v)} />
                        <ActionButton value={10} onAction={(v) => this.incrementTotalCount(v)} /> 
                         */
                    }

                    {
                        this.renderActionButtons()
                    }

                    <div style={{ clear: 'both' }}>
                        <hr />
                        <TotalCountDisplay value={totalCount} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterBox;