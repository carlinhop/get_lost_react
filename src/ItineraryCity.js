/**
 * Created by carlospereira on 20/02/2017.
 */
import React from 'react';
import ItineraryPlace from './ItineraryPlaceComponent'


let ItineraryCity = function({city}) {
    let itineraryPlaces = [];
    if (city.places.length > 0) {
        let key = 0;

        for (let place of city.places) {
            itineraryPlaces.push(<ItineraryPlace city={city} place={place} key={key}/>);
            key++;
        }

        return (<div>
                <h1>{city.name}</h1>
                {itineraryPlaces}
            </div>
        );
    }

    else{
        return (<div>
                <h1>No place was choosen</h1>

            </div>
        );
    }


};

export default ItineraryCity;