/**
 * Created by carlospereira on 16/02/2017.
 */

import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router';




let HeaderComponent = function({show, hide}){
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Get Lost</h2>
            <div className="controls">
                <button className="userCities" onClick={show}> Check Itinerary</button>
                <button className="help">Help</button>
                <button className="sign-up">Sign-up</button>
                <button className="log-in">Log-in</button>
                <button className="back-to-map-button" onClick={hide}>Back to map</button>
            </div>
        </div>
    )
}

export default HeaderComponent;