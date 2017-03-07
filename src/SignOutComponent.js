/**
 * Created by carlospereira on 06/03/2017.
 */
import React from 'react';import Tools from './models/Tools';
import { browserHistory } from 'react-router';


let SignOut = function(){

        Tools.xmlHttp("/users/logout", "GET").then(
            (result)=>{

                console.log(result);
                browserHistory.push("/sign-in");

            },

            (errors)=>{
                console.log(errors);
            }
        );
}

export default SignOut;