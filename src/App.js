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

                let mapHTML= document.getElementById("map");
                this.setState({mapWrap: new MapWrapper(mapHTML, {zoom: 4, center: {lat: this.state.city.coordinates[0],
                    lng:this.state.city.coordinates[1]}, disableDefaultUI: true})});
            });




    }

    componentWillUpdate(){



    }

    anotherCity(){

        //Making the form disappear
        let search = document.querySelector(".search");

        if( search.style.display = "block"){
            search.style.display = "none";
        }

        this.state.mapWrap.map.setZoom(4);
            this.setState({city: new City(Tools.getRandomCity(this.state.countries))
            }, ()=>{


                this.state.mapWrap.map.setCenter({lat: this.state.city.coordinates[0],
                    lng:this.state.city.coordinates[1]})
            });

    }

    likeCity(){
        this.state.mapWrap.centerMap("test", this.state.city);
        let search = document.querySelector(".search");
        search.style.display = "block";
    }

    searchTerm(event){
        let input = document.querySelector(".search")[0].value;
        event.preventDefault();


        this.state.mapWrap.searchMap(input, this.state.city);
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
                  <form className="search" onSubmit={this.searchTerm.bind(this)}>
                      <input  type="text" placeholder="Search for something"/>
                  </form>
                <button onClick={this.anotherCity.bind(this)} className="anotherCity">Another</button>
                <button onClick={this.likeCity.bind(this)} className="likeCity">Like It</button>
              </div>
              <SideBar city={this.state.city}/>


          </div>
      </div>
    );
  }
}

export default App;
