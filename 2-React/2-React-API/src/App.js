import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    //console.dir(props)
    this.state = {
      message: 'good evening'
    }
    console.log('App::constructor()')
  }
  changeMessage(message) {
    this.setState({ message })
  }
  render() {
    console.log('App::render()')
    let { title, author } = this.props
    let { message } = this.state
    return (
      <div className="container">
        <hr />
        <h1>{title} - by <span className="badge badge-dark">{author}</span></h1>
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-primary">GE</button>&nbsp;
        <button onClick={e => this.changeMessage('')} className="btn btn-danger">Remove Greeting</button>&nbsp;
        <hr />
        {message ? <Greeting message={message} /> : null}
      </div>
    );
  }
  componentDidMount() {
    console.log('App::componentDidMount()');
    // n/w call
    setTimeout(() => {
      let response = 'Hello, from server-side'
      this.setState({ message: response })
    }, 3000)
  }
  componentDidCatch() {
    //
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string
}
App.defaultProps = {
  author: 'Anonymous'
}

export default App;
