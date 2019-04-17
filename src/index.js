import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from "react-router-config";
import renderer from "./helpers/renderer";
import createStore from './helpers/createStore';
import routes from './client/routes';

const app = express();

app.use(express.static('public'));
app.get("*", (req, res)=> {
    // create the store here before 
    // the renderer function
    const store = createStore();    

    const promiseArr = matchRoutes(routes, req.path).map(({route})=>{
        if (route.loadData) return route.loadData(store);
    });

    Promise.all(promiseArr).then(()=>{
        res.send(renderer(req, store));
    });

})
app.listen(3000, ()=>{
    console.log(`App listening on PORT 3000`);
})
