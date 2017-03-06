/**
 * Created by carlospereira on 27/02/2017.
 */
import React from 'react';import Tools from './models/Tools';
import { browserHistory } from 'react-router';


let SignIn = function(){

    let logInUser = function(event){
        event.preventDefault();

        let input = document.querySelector(".register-form")[0].value;
        let password = document.querySelector("input[name='password']").value;

        Tools.xmlHttp("/users/login", "POST", {username: input, password: password}).then(
            (result)=>{

                    console.log(result);
                    browserHistory.push("/");

            },

            (errors)=>{
                console.log(errors);
            }
        );
    };



    return(
        <div>
            <form className="register-form" onSubmit={logInUser}>
                <label>Username</label>
                <input name="username" type="email"/>
                <label>Password</label>
                <input name="password" type="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignIn;