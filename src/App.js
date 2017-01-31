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
                this.setState({mapWrap: new MapWrapper(mapHTML, {zoom: 4, center: {lat: this.state.city.coordinates[0],
                    lng:this.state.city.coordinates[1]}, disableDefaultUI: true})});


            });




    }

    componentWillUpdate(){

    // this.state.mapWrap.map.setCenter({lat: this.state.city.coordinates[0],
    // lng:this.state.city.coordinates[1]});

    }

    random(){


            this.setState({city: new City(Tools.getRandomCity(this.state.countries))
            }, ()=>{
                console.log(this.state.city);

                this.state.mapWrap.map.setCenter({lat: this.state.city.coordinates[0],
                    lng:this.state.city.coordinates[1]})
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
                <button onClick={this.random.bind(this)} className="prueba">Prueba</button>
              </div>
              <SideBar city={this.state.city}/>


          </div>
      </div>
    );
  }
}

export default App;
