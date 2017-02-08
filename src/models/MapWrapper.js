/**
 * Created by user on 22/01/2017.
 */

import GoogleMapsLoader from "google-maps";
GoogleMapsLoader.LIBRARIES = ["geometry", "places"];
GoogleMapsLoader.KEY = "AIzaSyCc3GjnrXBW2p637XJUP6wbPR8LoqXkaFo";

class MapWrapper{

    constructor( el, options){

        this.map = {};
        this.markers = [];
        this.google = null;


        GoogleMapsLoader.load(((google)=>{

                this.google = google;
                this.map = new google.maps.Map(el, options);

            })
        );



    }



    createMap(){
        this.map = null;
    }

    createMarker(){

    }

    AddMarkers(marker){
        this.markers.push(marker);
    }

    deleteMarker(marker){

    }

    clearAllMarkers(){
        this.markers =[];
    }

    centerMap(term,city){

        let request = {
            location:
                new this.google.maps.LatLng(city.coordinates[0],city.coordinates[1]),
            radius: "1000",
            query: city.name
        };


        let service = new this.google.maps.places.PlacesService(this.map);
        console.log(service);
        service.textSearch(request, (results, status)=>{
            this.map.setCenter(results[0].geometry.location);
            this.map.setZoom(10);
        });
    }

    searchMap(term, city){

            //this.map.clearMarkers();



            let request = {
                location:
                    new this.google.maps.LatLng(city.coordinates[0],city.coordinates[1]),
                radius: "600",
                query: term

            };
            

            let service = new this.google.maps.places.PlacesService(this.map);

        service.textSearch(request, (results, status)=>{
            console.log(results);

        });
    }
}

export default MapWrapper;