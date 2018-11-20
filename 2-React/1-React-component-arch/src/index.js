

import 'bootstrap/dist/css/bootstrap.css'
console.log('-index.js-')

import React from 'react'
import ReactDOM from 'react-dom'


// working with react,


/*

    <div class="alert alert-info">
        <p>good morning</p>
        <p>TIME</p>
    </div>

*/

// step-1 : define component-class

// class Greeting extends React.Component {
//     render() {
//         let messagePEle = React.createElement('p', null, 'good morning')
//         let timePEle = React.createElement('p', null, new Date().toLocaleTimeString())
//         let divEle = React.createElement('div', {className:'alert alert-info'}, messagePEle, timePEle)
//         return divEle
//     }
// }

// or JSX

class Greeting extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                <p>good morning</p>
                <hr />
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
        )
    }
}


// step-2 : instantiate component & render to virtual DOM
// let greeting1 = React.createElement(Greeting, null, null)
//or
let greeting1=<Greeting />

ReactDOM.render(greeting1, document.getElementById('root'))