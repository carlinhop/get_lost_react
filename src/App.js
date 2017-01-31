import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tools from './models/Tools';
import City from "./models/City";
import Place from "./models/Place";
import MapWrapper from "./models/MapWrapper";
import SideBar from "./SideBar";




class App extends Component {

    constructor(props){

        super(props);
        this.state = {};



    }

    componentDidMount(){

        let mapWrap;

         Tools.xmlHttp("https://restcountries.eu/rest/v1/all", "GET")
            .then((results)=>{
                this.setState({countries: results});

            }).then(()=>{
                this.setState({city: new City(Tools.getRandomCity(this.state.countries))});

            }).then(()=>{
                console.log(this.state.city);
                let mapHTML= document.getElementById("map");
                mapWrap = new MapWrapper(mapHTML, {zoom: 4, center: {lat: this.state.city.coordinates[0],
                    lng:this.state.city.coordinates[1]}, disableDefaultUI: true});

            }).then((something)=>{
             console.log(something);
         });




    }



  render() {



    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div className="main">
              <div className="map-container">
                <div id="map" className="map"></div>
              </div>
              <SideBar city={this.state.city}/>


          </div>
      </div>
    );
  }
}

export default App;
