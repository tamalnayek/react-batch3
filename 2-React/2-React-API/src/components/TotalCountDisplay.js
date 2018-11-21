import React, { Component } from 'react';

class TotalCountDisplay extends Component {
    render() {
        let { value } = this.props
        return (
            <div className="alert alert-danger">
                TotalCount : {value}
            </div>
        );
    }
}

export default TotalCountDisplay;