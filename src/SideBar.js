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
            <div className="sidebar">
                <img src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fnickshell1983.files.wordpress.com%2F2011%2F06%2Fphuket-thailand.jpg&f=1"/>
                <h1>{props.city.name}</h1>
                <p>{props.city.country}</p>
                <p>{props.city.currency[0]}</p>
            </div>)
    }
}

export default SideBar;