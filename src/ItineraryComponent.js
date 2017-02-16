/**
 * Created by carlospereira on 16/02/2017.
 */
import React from 'react';

let ItineraryComponent = function({city}){

    let places = [];
    // for (place of city.places){
    //     places.push(place);
    // }

    if (city == null || city.length === 0) {
        return <p>Loading...</p>;
    }


    else {

        return (
            <div className="itinerary">
                <h1>Testing</h1>
                <h3>{city.name}</h3>

            </div>
        )
        }
}

export default ItineraryComponent;