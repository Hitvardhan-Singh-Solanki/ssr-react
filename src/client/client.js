import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom'
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from 'react-router-dom'
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routes from "./routes";
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

(function(){
    ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <div>{renderRoutes(Routes)}</div>
            </BrowserRouter>
        </Provider>, 
    document.getElementById("root"));    
}())