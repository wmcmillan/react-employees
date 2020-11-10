import React from 'react';
import './style.css';

export default function TableRow(props) {
    return (
        <div className="row table-row">
            <div className="col-md-2">
                {props.image === "Image"? 
                <span>{props.image}</span> : <img src={props.image} alt="user avatar"/>
                }
            </div>
            <div className="col-md-2">
                <span>{props.name}</span>
            </div>
            <div className="col-md-2">
                <span>{props.phone}</span>
            </div>
            <div className="col-md-4">
                <span>{props.email}</span>
            </div>
            <div className="col-md-2">
                <span>{props.age}</span>
            </div>
        </div>
    )
}
