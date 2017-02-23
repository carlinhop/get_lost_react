/**
 * Created by carlospereira on 09/02/2017.
 */

/**
 * Created by user on 30/01/2017.
 */

import React from 'react';



let PlaceComponent = function({place, selectFunction}){

    if (place == null || place.length === 0) {
        return <p>Loading...</p>;
    }


    else {
        return (
        <scroll-page  className="place"  id={place.place_id.toString()} >
            <div>
                <h2>{place.name}</h2>
                <h3>{place.rating}</h3>
                <button className="save-to-itinerary" onClick={selectFunction} >Save</button>
            </div>
        </scroll-page>
        )
    }
};

export default PlaceComponent;