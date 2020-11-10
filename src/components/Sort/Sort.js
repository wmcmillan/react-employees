import React from 'react';
import './style.css';

export default function Sort(props) {

    return (
        <form className="form-inline sort-form" > 
            <div className="col-md-6 form-group">
                <label>Sort by: </label>
                <select
                    value={props.value}
                    onChange={props.handleSortChange}
                    name="sort"
                    className="form-control">
                    <option value="unsorted">Unsorted</option>
                    <option value="age">Age</option>
                </select>
            </div>
        </form>
    )
}
