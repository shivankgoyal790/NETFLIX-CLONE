import React from "react"
import ReactDOM from "react-dom"
import Netflixrouter from "G:/react_practice/development/src/Netflixrouter.js"
import {BrowserRouter} from "react-router-dom"

const Reactroot = document.getElementById("root")
ReactDOM.render(
<BrowserRouter>
<Netflixrouter />
</BrowserRouter>,Reactroot)     