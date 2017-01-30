/**
 * Created by user on 30/01/2017.
 */

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';


let SideBar = function(props){

    if (props.city == null || props.city.length === 0) {
        return <p>Loading...</p>;
    }

    else {
        return (
            <div>
                <h1>Prueba</h1>
                <p>{props.city.name}</p>
            </div>)
    }
}

export default SideBar;