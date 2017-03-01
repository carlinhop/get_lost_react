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
                <button className="help">Help</button>
                <button className="userCities" onClick={show}> Check Itinerary</button>
                <button className="register"><Link to="/register">Register</Link></button>
                <button className="sign-in"><Link to="/sign-in">Sign In</Link></button>
                <button className="back-to-map-button" onClick={hide}>Back to map</button>
                <button className="sign-out"><Link to="/sign-out">Sign out</Link></button>
            </div>
        </div>
    )
};

export default HeaderComponent;