import React from 'react';
import "./Directory.css";

function Directory(props) {
    console.log(props)
    return (
        <tr>
                <img id="modal-img" src={props.image} alt={props.name} />
                <p><strong>Name:</strong>{props.name}</p>
                <p><strong>Phone Number: </strong>{props.phone}</p>
                <p><strong>Email: </strong><a id="modal-a" href={`mailto:${props.email}`}>{props.email}</a></p>
                <p><strong>Birthday: </strong>{props.dob}</p>
        </tr>
        
    )
}

export default Directory