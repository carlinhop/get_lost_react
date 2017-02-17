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


class App extends Component {

    constructor(props) {

        super(props);
        this.state = {results: null, selectedList: []};


    }

    componentDidMount() {

        let mapWrap;

        Tools.xmlHttp("https://restcountries.eu/rest/v1/all", "GET")
            .then((results)=>{
                this.setState({countries: results});

            }).then(()=>{
            this.setState({city: new City(Tools.getRandomCity(this.state.countries))});

        }).then(()=>{

            let mapHTML = document.getElementById("map");
            this.setState({
                mapWrap: new MapWrapper(mapHTML, {
                    zoom: 4, center: {
                        lat: this.state.city.coordinates[0],
                        lng: this.state.city.coordinates[1]
                    }, disableDefaultUI: true
                })
            })

        }).then(()=>{

            setTimeout(()=>{
                this.state.mapWrap.getGooglePlace(this.state.city).then((result)=>{
                    this.setState({photo: result});
                });
            }, 50);

        });
    }

    componentWillUpdate() {


    }

    anotherCity() {

        this.state.mapWrap.clearAllMarkers();


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
            })
        });

        // I have to fix this !!! Using setTimeout seems wrong
        setTimeout(()=>{
            this.state.mapWrap.getGooglePlace(this.state.city).then((result)=>{
                this.setState({photo: result});
            });
        }, 1000);



    }

    likeCity() {


        this.state.mapWrap.centerMap();



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

         let selectedDom = event.currentTarget;
         let selected = this.state.places.find((place)=>{
             return event.currentTarget.id === place.place_id;
         });

        this.setState((prevStatus)=>{
                let oldList = prevStatus.selectedList;
                let city = prevStatus.city;
                oldList.push(selected);
                city.places = oldList;
            return {city: city}
        }, ()=>{
            console.log(this.state.city.places);
        });
        selectedDom.style.backgroundColor = "grey"
    }

    showItinerary(){
        let mapDom = document.querySelector(".map-container").style.display = "none";
        let sidebarDom = document.querySelector(".sidebar").style.display = "none";
        let itineraryDom = document.querySelector(".itinerary").style.display = "block";

        // let itineraryDom = ;
        console.log(this.state.city);
    }


    render() {

        return (

            <div className="App">
                <HeaderComponent show={this.showItinerary.bind(this)}/>
                <div className="main">
                    <div className="map-container">
                        <div id="map" className="map"></div>
                        <form className="search" onSubmit={this.searchTerm.bind(this)}>
                            <input type="text"  placeholder="Search for something" />
                        </form>
                        <button onClick={this.anotherCity.bind(this)} className="anotherCity">Another</button>
                        <button onClick={this.likeCity.bind(this)} className="likeCity">Like It</button>
                    </div>
                    <SideBar city={this.state.city} places={this.state.places} photo={this.state.photo}selectFunction={this.selectPlace.bind(this)}/>
                    <ItineraryComponent city={this.state.city} />
                </div>
            </div>
        );
    }
}

export default App;
