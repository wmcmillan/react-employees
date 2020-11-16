import React from 'react';
import "./Sort.css";

function Sort(props) {
    return (
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort By
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" onClick={props.handleSortByFirstName} href="#">First Name</a>
            <a className="dropdown-item" onClick={props.handleSortByLastName} href="#">Last Name</a>
            <a className="dropdown-item" onClick={props.handleSortByDate} href="#">D.O.B.</a>
        </div>
        <button onClick={props.handleSeeAll} className="btn btn-secondary" id="see-all">
                    See All Employees
        </button>
    </div>
    )
}

export default Sort