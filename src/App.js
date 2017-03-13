import React, {Component} from 'react';

import './App.css';
import Tools from './models/Tools';
import City from "./models/City";
import Place from "./models/Place";
import User from "./models/User";
import MapWrapper from "./models/MapWrapper";
import SideBar from "./SideBar";
import HeaderComponent from "./HeaderComponent";
import ItineraryComponent from "./ItineraryComponent";

import GoogleMapsLoader from "google-maps";
GoogleMapsLoader.LIBRARIES = ["geometry", "places"];
GoogleMapsLoader.KEY = "AIzaSyCc3GjnrXBW2p637XJUP6wbPR8LoqXkaFo";


import KGSearch from 'google-kgsearch'
const kGraph = KGSearch("AIzaSyCvOKsuURV-TQBZgcvcBLYeGTTq1QZ2868");


class App extends Component {

    constructor(props) {

        super(props);
        this.state = {results: null, selectedList: [], cities:[]};
    }

    componentDidMount(cityName) {

                GoogleMapsLoader.load(((google) => {
                this.setState({google: google}, ()=> {

                        let mapWrap;

                        Tools.xmlHttp("https://restcountries.eu/rest/v1/all", "GET")
                            .then((results) => {
                                this.setState({countries: results});

                            }).then(() => {
                            if(cityName){

                                this.setState({city: new City(Tools.getCity(this.state.countries, cityName))});

                            }
                            else{
                                this.setState({city: new City(Tools.getRandomCity(this.state.countries))});
                            }


                        }).then(() => {

                            let mapHTML = document.getElementById("map");
                            this.setState({
                                mapWrap: new MapWrapper(mapHTML, {
                                    zoom: 4, center: {
                                        lat: this.state.city.coordinates[0],
                                        lng: this.state.city.coordinates[1]
                                    }, disableDefaultUI: true
                                }, this.state.google)
                            })

                        }).then(() => {
                            this.state.mapWrap.getGooglePlace(this.state.city).then((result) => {
                                this.setState({photo: result});
                            });
                        }).then(()=>{

                                this.getCityDescription(this.state.city).then((description)=>{
                                    console.log(description);
                                    this.setState({description: description});
                                });

                            });
                        });

                    })
                );
                
        Tools.xmlHttp("/test", "GET").then((results)=>{

                return this.setState({cities: results.cities});
            }
            ,(error)=>{
                console.log(error);
            });
    }

    componentWillUpdate() {


    }

    getCityDescription(city){

        let params = {
            query: city.name,
            types: 'City',
            limit: 1
        };

        let promise = new Promise((resolve,reject)=>{

            kGraph.search(params, (err, items) => {

                if(err) console.log(err);
                resolve(items[0].result.detailedDescription.articleBody);

            });
        });

        return promise;

    }

    anotherCity() {

        this.state.mapWrap.clearAllMarkers();
        this.setState({selectedList: [], places: null});

        //Making the form disappear and clearing it
        let search = document.querySelector(".search");
        search[0].value = "";

        if (search.style.display = "block") {
            search.style.display = "none";
        }

        this.state.mapWrap.map.setZoom(4);
        this.setState({
            city: new City(Tools.getRandomCity(this.state.countries))
        }, () => {

            this.state.mapWrap.map.setCenter({
                lat: this.state.city.coordinates[0],
                lng: this.state.city.coordinates[1]
            });

            this.state.mapWrap.getGooglePlace(this.state.city).then((result) => {
                this.setState({photo: result});

            });

            this.getCityDescription(this.state.city).then((description)=>{
                console.log(description);
                this.setState({description: description});
            });


        });
    }

    likeCity(){


        this.state.mapWrap.centerMap();
        this.setState((prevState)=>{
            if(!this.state.cities) {
                let oldCity = prevState.city;
                let cities = [this.state.city];
                return {cities: cities}
            }
            else{

                let cities = prevState.cities;
                //Checking if there is a city with the same name
                if(!cities.find((city)=>{
                        return city.name === this.state.city.name;
                    })){
                    cities.push(this.state.city);
                }


                return {cities: cities}
            }

        },
            ()=>{

            }
        );


        let search = document.querySelector(".search");
        search.style.display = "block";
        document.querySelector("input").focus();

    }

    searchTerm(event) {

        try{
            // //Clearing the selection styling on the sidebar
            let placeRows = document.querySelectorAll("scroll-page");
            console.log(placeRows);

            if(placeRows){
                for (let row of placeRows){
                    row.style.backgroundColor = "aliceblue";
                }
            }
        }

        catch(error) {
            console.log(error);
        }

        let input = document.querySelector(".search")[0].value;
        event.preventDefault();


        this.state.mapWrap.searchMap(input, this.state.coordinates).then((results)=>{
            this.setState({places: results.sort((a,b)=>{
                return   b.rating - a.rating;
            })});
        });

    }

    selectPlace(event){

         let selectedDom = event.currentTarget.parentNode.parentNode;

         let selected = this.state.places.find((place)=>{
             return selectedDom.id === place.place_id;
         });

        this.setState((prevStatus)=>{
                let oldList = prevStatus.selectedList;
                let city = prevStatus.city;
                if(!oldList.find((place)=>{
                    return place.name === selected.name;
                    })){
                    oldList.push(selected);
                }

                city.places = oldList;
            return {city: city}
        }, ()=>{

        });
        selectedDom.style.backgroundColor = "grey"
    }

    showItinerary(){

        let mapDom = document.querySelector(".map-container").style.display = "none";
        let sidebarDom = document.querySelector(".sidebar").style.display = "none";
        let itineraryDom = document.querySelector(".itinerary").style.display = "block";
        this.postItinerary();
    }

    hideItinerary(){
        let mapDom = document.querySelector(".map-container").style.display = "flex";
        let sidebarDom = document.querySelector(".sidebar").style.display = "block";
        let itineraryDom = document.querySelector(".itinerary").style.display = "none";
    }


    postItinerary(){
        if(this.state.cities.length > 0) {
            if (this.state.cities[0].places.length > 0) {
                Tools.xmlHttp("/test", "POST", {itinerary: this.state.cities}).then((results) => {
                    //console.log(results);
                });
            }
        }
    }


    deleteCityFromItinerary(cityName){
        //make this its own function like: getCity
        let targetIndex;

        let target = this.state.cities.filter((city)=>{
            if(city.name === cityName){
                targetIndex = this.state.cities.indexOf(city);
                return true;
            }
        });

        this.setState((prevState)=>{
            prevState.cities.splice(targetIndex, 1);
            return {cities: prevState.cities};
        }, ()=>{
            this.postItinerary();
        });
    }

    deletePlaceFromItinerary(cityName, placeName){

        //make this its own function like: getCity
        let targetIndex;
        let targetPlaceIndex;

        let target = this.state.cities.filter((city)=>{
            if(city.name === cityName){
                targetIndex = this.state.cities.indexOf(city);
                return true;
            }
        });

        let targetPlace = target.filter((place)=>{
            if(place.name === placeName){
                return true;
            }
        });

        targetPlaceIndex = target.indexOf(targetPlace);

        this.setState((prevState)=>{
            prevState.cities[targetIndex].places.splice(targetPlaceIndex, 1);
            return {cities: prevState.cities};
        }, ()=>{
            this.postItinerary();
        });
    }

    addNewPlaceToCity(cityName) {

        console.log("probando: " + cityName);
        this.hideItinerary();
        this.componentDidMount(cityName);


    }


    render() {

        return (

            <div className="App">
                <HeaderComponent show={this.showItinerary.bind(this)} hide={this.hideItinerary} />
                <div className="main">
                    <div className="map-container">
                        <div id="map" className="map"></div>
                        <form className="search" onSubmit={this.searchTerm.bind(this)}>
                            <input type="text"  placeholder="Search for something" />
                        </form>
                        <button onClick={this.anotherCity.bind(this)} className="anotherCity">Another City</button>
                        <button onClick={this.likeCity.bind(this)} className="likeCity">Like It</button>
                    </div>
                    <SideBar city={this.state.city}
                             places={this.state.places}
                             description={this.state.description}
                             photo={this.state.photo}
                             selectFunction={this.selectPlace.bind(this)}/>
                    <ItineraryComponent cities={this.state.cities}
                                        deleteCity={this.deleteCityFromItinerary.bind(this)}
                                        deletePlace={this.deletePlaceFromItinerary.bind(this)}
                                        addPlace={this.addNewPlaceToCity.bind(this)} />
                </div>
            </div>
        );
    }
}

export default App;
