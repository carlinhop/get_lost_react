/**
 * Created by user on 22/01/2017.
 */

import GoogleMapsLoader from "google-maps";
GoogleMapsLoader.LIBRARIES = ["geometry", "places"];
GoogleMapsLoader.KEY = "AIzaSyCc3GjnrXBW2p637XJUP6wbPR8LoqXkaFo";

class MapWrapper {

    constructor(el, options) {

        this.map = {};
        this.markers = [];
        this.google = null;
        this.newCoords = null;


        GoogleMapsLoader.load(((google) => {


            this.google = google;
            this.map = new google.maps.Map(el, options);


            })
        );


    }


    deleteMarker(marker) {

    }

    clearAllMarkers() {
        for(let marker of this.markers){
            marker.setMap(null);
        }
    }


    getGooglePlace(city){

        let request = {
            location: new this.google.maps.LatLng(city.coordinates[0], city.coordinates[1]),
            radius: "1000",
            query: city.name
        };

        let service = new this.google.maps.places.PlacesService(this.map);

        let promise = new Promise((resolve, reject)=>{

            service.textSearch(request, (results, status) => {
                this.newCoords = results[0].geometry.location;
                resolve(results[0].photos[0].getUrl({"maxWidth": 500, "maxHeigth": 400}));
                reject(status);
            });


        });

        return promise;


    }

    centerMap() {

        this.map.setCenter(this.newCoords);
        this.map.setZoom(10);

    }

    searchMap(term) {
        let promise = new Promise((resolve, reject)=>{
            let request = {
                location: this.newCoords,
                radius: "1000",
                query: term
            };
            let service = new this.google.maps.places.PlacesService(this.map);

            service.textSearch(request, (results, status) => {
                if(status){

                    for(let place of results){

                        this.addMarkers(place);
                    }

                    resolve(results);
                }


            });
        });


        return promise;
    }

    addMarkers(place){
        let marker = new this.google.maps.Marker({
            position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
            map: this.map,

        });
        marker.setAnimation(this.google.maps.Animation.DROP);
        this.markers.push(marker);



        let infowindow = new this.google.maps.InfoWindow({content: place.name});
        marker.addListener('mouseover', function() {
            infowindow.open(this.map, marker);
        });

        marker.addListener('mouseout',function(){
            infowindow.close();
        });

        // marker.addListener('click', function(event){
        //     if(!this.selectedPlaces.includes(place)){
        //         this.selectedPlaces.push(place);
        //         this.addPlace(place);
        //     }
        //     console.log(this.selectedPlaces);

    }
}

export default MapWrapper;