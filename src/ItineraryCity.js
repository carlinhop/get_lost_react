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
                <button>Delete city</button>
                <button>Add places</button>
                {itineraryPlaces}
            </div>
        );
    }

    else{
        return (<div>
                <h1>{city.name}</h1>
                <h3>No place was choosen</h3>
                <button>Delete city</button>
                <button>Add places</button>

            </div>
        );
    }


};

export default ItineraryCity;