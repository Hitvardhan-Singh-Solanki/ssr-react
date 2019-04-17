import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from "./routes";

(function(){
    ReactDOM.hydrate(
        <BrowserRouter>
            <Routes />
        </BrowserRouter>, 
    document.getElementById("root"));    
}())