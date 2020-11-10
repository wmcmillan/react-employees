import React from 'react';
import './style.css';

export default function Search(props) {
    return (
        <form onSubmit={props.handleFormSubmit} className="form-inline search-form">
            <div className="form-group">
                <input
                    value={props.value}
                    onChange={props.handleInputChange}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for Name"
                    id="search"
                />
                <button className="btn btn-dark">Search</button>
            </div>
        </form>
    )
}
