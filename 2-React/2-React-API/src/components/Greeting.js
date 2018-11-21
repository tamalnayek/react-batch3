import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Greeting extends Component {
    constructor(props) {
        super(props)
        console.log('Greeting::constructor()');
    }
    render() {
        console.log('Greeting::render()');
        let { message } = this.props
        return (
            <div>
                <div className="alert alert-info">
                    <p>{message}</p>
                    <hr />
                    <p>{new Date().toLocaleTimeString()}</p>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log('Greeting::componentDidMount()');
        // this.interval = setInterval(() => {
        //     this.forceUpdate();
        // }, 500)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting::shouldComponentUpdate()');
        return this.props.message !== nextProps.message;
    }
    componentDidUpdate() {
        console.log('Greeting::componentDidUpdate()');
    }
    componentWillUnmount() {
        //clearInterval(this.interval)
        console.log('Greeting::componentWillUnmount()');
    }
}
Greeting.propTypes = {
    message: PropTypes.string.isRequired
}

// Greeting.displayName="ibm-greeting"

export default Greeting;