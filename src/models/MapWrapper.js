/**
 * Created by user on 22/01/2017.
 */

class MapWrapper{

    constructor(city){
        this.city = city;
        this.map = null;
        this.markers = [];

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