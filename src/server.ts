import 'reflect-metadata'
import  express from "express";
import  { items }  from "./routes/_index";
import { App } from "./config/env/app.env";
import { logRequest } from "./middlewares/_index"
import { Database } from './config/database';
require('dotenv').config({ path: '.env' })

const app = express();
app.use(express.json());
app.use(logRequest);
app.use(items);

const connectdb =  new Database();
connectdb.ConnectToDB();

app.listen(App.PORT, () => { 
    console.log(`server running at ${App.PORT} port`);
})
