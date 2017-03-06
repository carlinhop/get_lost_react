/**
 * Created by carlospereira on 27/02/2017.
 */

import React from 'react';
import Tools from './models/Tools';
import { browserHistory } from 'react-router';


let Register = function(){

    let postUser = function(event){
        event.preventDefault();

        let input = document.querySelector(".register-form")[0].value;
        let password = document.querySelector("input[name='password']").value;
        let password2 = document.querySelector("input[name='password2']").value;


        console.log(input);
        Tools.xmlHttp("/users", "POST", {username: input, password: password, password2: password2}).then(
            (result)=>{
                console.log(result);

                browserHistory.push("/sign-in");

            },

            (errors)=>{
                console.log(errors);
            }
        );
    };


    return(
        <div>
            <form className="register-form" onSubmit={postUser}>
                <label>Username</label>
                <input name="username" type="email"/>
                <label>Password</label>
                <input name="password" type="password"/>
                <label>Confirm password</label>
                <input name="password2" type="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;