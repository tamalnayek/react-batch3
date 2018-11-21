import React, { Component } from 'react';

//way-1

// class Navbar extends Component {
//     render() {
//         let { title } = this.props;
//         return (
//             <div>
//                 <nav className="navbar navbar-light bg-primary">
//                     <a className="navbar-brand" href="/#">{title}</a>
//                 </nav>
//             </div>
//         );
//     }
// }

// export default Navbar;


//way-2  ==> for stateless component

export default function (props) {
    let { title } = props
    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <a className="navbar-brand" href="/#">{title}</a>
            </nav>
        </div>
    );
}