


import React from 'react';
import 'font-awesome/css/font-awesome.css'

function renderStars(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(<i  style={{color:'red'}} key={i} className="fa fa-star"></i>)
    }
    return arr;
}

export default function (props) {
    let { review } = props;
    return (
        <div className="row">
            <div className="col-8 col-sm-8 col-md-8">
                <div className="alert alert-info">
                    {renderStars(review.stars)} &mdash; {review.author}
                    <hr />
                    <p>{review.body}</p>
                </div>
            </div>
        </div>
    )
}