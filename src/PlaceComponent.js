/**
 * Created by carlospereira on 09/02/2017.
 */

/**
 * Created by user on 30/01/2017.
 */

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';


let PlaceComponent = function({place}){

    if (place == null || place.length === 0) {
        return <p>Loading...</p>;
    }


    else {

        return (
            <div className="place">

                <h1>{place.name}</h1>

            </div>)
    }
}

export default PlaceComponent;