/**
 * Created by carlospereira on 16/02/2017.
 */
import React from 'react';

import ItineraryCity from './ItineraryCity';

let ItineraryComponent = function({cities, deleteCity, deletePlace, addPlace}){



    if (!cities || cities.length === 0) {
        return <p className="itinerary">City was not choosen</p>;
    }


    else {
        if (cities.length > 0) {
            let citiesList = [];
            let city;
            let index = 0;
            for (city of cities) {
                if (city.places) {
                    citiesList.push(<ItineraryCity city={city}
                                                   deleteCity={deleteCity}
                                                   deletePlace={deletePlace}
                                                   addPlace={addPlace}
                                                   key={index}/>);
                    index++;
                }
                else {
                    return <p className="itinerary">nothing...</p>;
                }
            }

            return (
                <div className="itinerary">
                    {citiesList}
                </div>

            )
        }
    }

};

export default ItineraryComponent;