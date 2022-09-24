import React from 'react';
import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";


function Login() {
     const[user, setUser]= useState({});

     function handleCallbackResponse(response){
        console.log("Encoded JWT ID token:"+ response.credential);
        var userObject= jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden=true;
       }

       function handleSignOut(event){
           setUser({});
           document.getElementById("signInDiv").hidden=false;
       }

      useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id: "189791841273-7rjilhcsq5t77o4pjhmqaeeoib7oq81a.apps.googleusercontent.com",
          callback:  handleCallbackResponse
       });

       google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          { theme:"outline", size:"large" }
    );
         google.accounts.id.prompt();

    },[]);

    //If we have no user: sign in button
    // If we have a user: show the log out button
    return(
        <div className="Login-component">
           <div id="signInDiv"></div>
           { Object.keys(user).length!=0 &&
              <button className="signoutButton" onClick={(e)=> handleSignOut(e)}>Sign Out</button>
           }
          {user &&
                <div className="imgDiv">
                   <img className="userImage" src={user.picture}></img>
                </div>
          }
           
        </div>   
    );
}

export default Login