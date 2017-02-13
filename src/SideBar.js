/**
 * Created by user on 30/01/2017.
 */

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import PlaceComponent from './PlaceComponent';

let SideBar = function({places, city}){

    if (city == null || city.length === 0) {
        return <p>Loading...</p>;
    }


    else {
        if(places){

            let placesDom = [];

            for (let place of places){
                let placedom = <PlaceComponent place={place}> </PlaceComponent>;
                placesDom.push(placedom);
                console.log(place);

            }

            return (
                <div className="sidebar">
                    <scroll-container> {placesDom}</scroll-container>
                </div>);

        }
        return (
            <div className="sidebar">
                <img src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fnickshell1983.files.wordpress.com%2F2011%2F06%2Fphuket-thailand.jpg&f=1"/>
                <h1>{city.name}</h1>
                <p>{city.country}</p>
                <p>{city.currency[0]}</p>
            </div>)
    }
}

export default SideBar;