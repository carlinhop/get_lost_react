/**
 * Created by user on 30/01/2017.
 */

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import PlaceComponent from './PlaceComponent';

let SideBar = function({places, city, description, photo,selectFunction}){

    if (city == null || city.length === 0) {
        return <p>Loading...</p>;
    }


    else {
        if(places && places.length>0){

            let placesDom = [];
            for (let place of places){
                let placedom = <PlaceComponent place={place} key={places.indexOf(place)} selectFunction={selectFunction}> </PlaceComponent>;
                placesDom.push(placedom);

            }

            return (
                <div className="sidebar">
                    <scroll-container> {placesDom}</scroll-container>
                </div>);

        }
        return (
            <div className="sidebar">
                <img src={photo}/>
                <h1>{city.name}</h1>
                <p>{city.country}</p>
                <p>{city.currency[0]}</p>
                <p>{description}</p>
            </div>)
    }
};

export default SideBar;