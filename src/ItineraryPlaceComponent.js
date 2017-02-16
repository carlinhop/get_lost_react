/**
 * Created by carlospereira on 16/02/2017.
 */

import React from 'react';

let ItineraryPlaceComponent = function({place}){



    if (place == null || place.length === 0) {
        return <p className="itinerary-place">Loading...</p>;
    }


    else {
        return (
                <div className="itinerary-place">
                    <h3>{place.name}</h3>
                </div>
        )
    }


}

export default ItineraryPlaceComponent;