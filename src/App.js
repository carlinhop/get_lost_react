import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tools from './models/Tools';

class App extends Component {
    constructor(props){
        super(props);
        this.state = Tools.xmlHttp("https://restcountries.eu/rest/v1/all")
            .then((results)=>{
            this.setState({countries: results});

        }).then(()=>{
            this.setState({city: Tools.getRandomCity(this.state.countries)});
            console.log(this.state.city);
        });
    }



  render() {




    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
