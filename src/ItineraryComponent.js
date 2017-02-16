/**
 * Created by carlospereira on 16/02/2017.
 */
import React from 'react';

let ItineraryComponent = function({city}){



    if (city == null || city.length === 0) {
        return <p className="itinerary">Loading...</p>;
    }


    else {

        if(city.places.length>0) {

            return (

                <div className="itinerary">
                    <h1>Itinerary</h1>
                    <h3>{city.places[0].name}</h3>


                </div>
            )

        }

        else {
            return <p className="itinerary">nothing...</p>;
        }

    }

}

export default ItineraryComponent;