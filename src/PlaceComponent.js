/**
 * Created by carlospereira on 09/02/2017.
 */

/**
 * Created by user on 30/01/2017.
 */

import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';


let PlaceComponent = function({place, key}){

    if (place == null || place.length === 0) {
        return <p>Loading...</p>;
    }


    else {


        return (

        <scroll-page  className="place" key={key}>
            <div >
                <h2>{place.name}</h2>
                <h3>{place.rating}</h3>
            </div>


        </scroll-page>

)
    }
}

export default PlaceComponent;