import React from 'react';
import { NavLink } from 'react-router-dom';

const PhysicianIndexItem = ({ physician }) => {
    return (
        <NavLink to={`/physician/${physician.id}`} className="physician-items" activeClassName="physician-items clicked">
            <span>Dr. {physician.lname}, {physician.fname}</span>
        </NavLink>
    )
}

export default PhysicianIndexItem;