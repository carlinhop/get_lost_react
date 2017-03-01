/**
 * Created by carlospereira on 27/02/2017.
 */
import React from 'react';


let SignIn = function(){
    return(
        <div>
            <form>
                <label>Username</label>
                <input type="text"/>
                <label>Password</label>
                <input type="password"/>
            </form>
        </div>
    );
}

export default SignIn;