import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tools from './models/Tools';
import City from "./models/City";
import Place from "./models/Place";
import MapWrapper from "./models/MapWrapper";




class App extends Component {

    constructor(props){

        super(props);

        this.state = {name: "", google: null, mapWrap: null};

        this.state = Tools.xmlHttp("https://restcountries.eu/rest/v1/all", "GET")
            .then((results)=>{
            this.setState({countries: results});

        }).then(()=>{
            this.setState({city: new City(Tools.getRandomCity(this.state.countries))});

        }).then(()=>{
            console.log(this.state.city);
            let mapHTML= document.getElementById("map");
            let mapWrap = new MapWrapper(mapHTML, {zoom: 4, center: {lat: this.state.city.coordinates[0],
                    lng:this.state.city.coordinates[1]}});
            });


    }

    componentDidMount(){


    }



  render() {



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div id="map" className="map"></div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


      </div>
    );
  }
}

export default App;
