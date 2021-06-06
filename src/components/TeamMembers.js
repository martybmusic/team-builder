import React from 'react';

function TeamMembers (props) {
    const {details} = props

    return (
        <div className='container'>
            <h3>{details.name}</h3>
            <p>Position: {details.position}</p>
            <p>Email: {details.email}</p>
            <p>Campus: {details.campus}</p>

        </div>
    )
}

export default TeamMembers