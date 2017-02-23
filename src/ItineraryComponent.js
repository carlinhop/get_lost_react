/**
 * Created by carlospereira on 16/02/2017.
 */
import React from 'react';

import ItineraryCity from './ItineraryCity';

let ItineraryComponent = function({cities}){



    if (cities == null) {
        return <p className="itinerary">City was not choosen</p>;
    }


    else {

        let citiesList=[];
        let city;
        for(city of cities) {
            if(city.places) {
                citiesList.push(<ItineraryCity city={city}/>);
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

};

export default ItineraryComponent;