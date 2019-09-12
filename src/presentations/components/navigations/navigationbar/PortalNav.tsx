import * as React from 'react';
import {NavLink} from "react-router-dom";

export const PortalNav: React.FC = (props) => {
    return (
        <ul>
            <li><NavLink to='/'>Portal</NavLink></li>
            <li><NavLink to='/playground'>Playground</NavLink></li>
            <li><NavLink to='/aquarium'>Aquarium</NavLink></li>
            <li><NavLink to='/cafe'>Cafe</NavLink></li>
            <li><NavLink to='/garden'>Garden</NavLink></li>
            <li><NavLink to='/cinema'>Cinema</NavLink></li>
            <li><NavLink to='/news'>News</NavLink></li>
        </ul>
    )
};