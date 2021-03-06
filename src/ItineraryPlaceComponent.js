/**
 * Created by carlospereira on 16/02/2017.
 */

import React from 'react';

let ItineraryPlaceComponent = function ({city, place, deletePlace}) {


    if (place === null || place.length === 0) {
        return <p className="itinerary-place">Loading...</p>;
    }


    else {
        return (
            <div className="itinerary-place">

                <h3>{place.name}</h3>
                <p>{place.types[0]}</p>
                <p>{place.types[1]}</p>

                <button onClick={() => {
                    deletePlace(city.name, place.name);
                }} className="delete-from-itinerary">Delete place
                </button>
            </div>
        )
    }


};

export default ItineraryPlaceComponent;