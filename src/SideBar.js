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
                <h1>Current City</h1>
                <p>{props.city.name}</p>
                <p>{props.city.country}</p>
                <p>{props.city.currency[0]}</p>
            </div>)
    }
}

export default SideBar;