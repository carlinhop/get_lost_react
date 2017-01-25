/**
 * Created by user on 22/01/2017.
 */

class City{


    constructor(city){
        this.name = city.name;
        this.coordinates = city.coordinates;
        this.languages = city.languages;
        this.country = city.country;
        this.currency = city.currency;
        this.places = [];
    }

    selectPlace(placeName){
        this.places.select((place)=>{
            return place.name == placeName;
        });
    }

}

export default City;
