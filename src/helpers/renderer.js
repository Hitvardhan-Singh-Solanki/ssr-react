import React from 'react';
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Routes from "../client/routes"




export default (req, store) => {    
    const content = renderToString(
            <Provider store={store}>
                <StaticRouter context={{}} location={req.path}>
                    <div>
                        {
                            renderRoutes(Routes)
                        }
                    </div>
                </StaticRouter>
            </Provider> 
        );
        
    return `
        <html>
            <head></head>
            <body>
                <div id="root">${
                    content
                }</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}