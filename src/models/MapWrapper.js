/**
 * Created by user on 22/01/2017.
 */

import GoogleMapsLoader from "google-maps";
GoogleMapsLoader.LIBRARIES = ["geometry", "places"];
GoogleMapsLoader.KEY = "AIzaSyCc3GjnrXBW2p637XJUP6wbPR8LoqXkaFo";

class MapWrapper{

    constructor( el, options){

        this.map = null;
        this.markers = [];


        GoogleMapsLoader.load(((google)=>{

                this.map = new google.maps.Map(el,options);
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
}

export default MapWrapper;