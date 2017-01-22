/**
 * Created by user on 22/01/2017.
 */

class City{

    constructor(name, coordinates, languages, country, currency){
        this.name = name;
        this.coordinates = coordinates;
        this.languages = languages;
        this.country = country;
        this.currency = currency;
        this.places = [];
    }

    selectPlace(placeName){
        this.places.select((place)=>{
            return place.name == placeName;
        });
    }

}

export default City;
