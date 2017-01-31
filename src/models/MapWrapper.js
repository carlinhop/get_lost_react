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
                this.createControl("Another");
                this.createControl("Take me there");
                console.log(this.map.controls);



            })
        );



    }

    createControl(message){
        // Create a div to hold the control.
        let controlDiv = document.createElement('div');

        // Set CSS for the control border
        let controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginTop = '500px';
        controlUI.style.marginRight = "10px";

        controlUI.style.textAlign = 'center';
        controlUI.title = "";
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior
        let controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = message;
        controlUI.appendChild(controlText);

        controlUI.className = "another";


        //Pushing the new control to the map
        this.map.controls[this.google.maps.ControlPosition.TOP_CENTER].push(controlDiv);


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