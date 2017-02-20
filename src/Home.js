/**
 * Created by user on 28/01/2017.
 */
import React from 'react';
import {Link} from 'react-router';
import './App.css';


let Home = function(){
  return (
         <div className="home container">
             <button className="getlost-button" onClick={()=>{
                 document.querySelector("#root").style.backgroundImage = "none";
             }}> <Link to="/app"> Get Lost</Link></button>
         </div>
    )
};

export default Home;