import 'babel-polyfill';
import express from 'express';
import renderer from "./helpers/renderer";
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get("*", (req, res)=> {
    // create the store here before the renderer function
    const store = createStore();    
    res.send(renderer(req, store));
})
app.listen(3000, ()=>{
    console.log(`App listening on PORT 3000`);
})
