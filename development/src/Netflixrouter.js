import React from 'react'
import {Route, Switch } from "react-router-dom";
import Netflix from "G:/react_practice/development/src/Apps/Netflix.js"
import Login from "G:/react_practice/development/src/Components/Login/login.js"


const Netflixrouter = () =>{
    return(
        <>
                <Switch>
                <Route exact path="/" component={Netflix}/>
                <Route path="/Login" component={Login}/>
                </Switch>
            
        </>
    )
}

export default Netflixrouter