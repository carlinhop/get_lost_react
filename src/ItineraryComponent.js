/**
 * Created by carlospereira on 16/02/2017.
 */
import React from 'react';
import ItineraryPlace from './ItineraryPlaceComponent'

let ItineraryComponent = function({city}){



    if (city == null || city.length === 0) {
        return <p className="itinerary">Loading...</p>;
    }


    else {

        if(city.places.length>0) {
            let itineraryPlaces = [];
            let key = 0;
            for(let place of city.places){
                itineraryPlaces.push(<ItineraryPlace place={place} key={key}/>);
                key++;
            }
            return (
                <div className="itinerary">
                    <h2>{city.name}</h2>
                    {itineraryPlaces}
                </div>

            )
        }

        else {
            return <p className="itinerary">nothing...</p>;
        }

    }

}

export default ItineraryComponent;