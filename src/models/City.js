/**
 * Created by user on 22/01/2017.
 */

class City {


    constructor(cityObj) {
        //cityObj is a data object coming from an API
        this.name = cityObj.name;
        this.coordinates = cityObj.coordinates;
        this.languages = cityObj.languages;
        this.country = cityObj.country;
        this.currency = cityObj.currency;
        this.places = [];
    }

    selectPlace(placeName) {
        this.places.select((place) => {
            return place.name === placeName;
        });
    }

}

export default City;
