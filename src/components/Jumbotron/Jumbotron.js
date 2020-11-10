import React from 'react';
import './style.css';

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
        <div className="container">
            <h1 className="display-4" id="jumbo-header">Employee Directory</h1>
            <hr />
            <p className="lead">List your employees and sort them based on name or birthday!</p>
        </div>
        </div>
    )
}

export default Jumbotron