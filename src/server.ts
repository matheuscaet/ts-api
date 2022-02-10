import 'reflect-metadata'
import { App } from "./config/env/app.env";
import { app } from "./config/express-config";
import { Database } from './config/database';
require('dotenv').config({ path: '.env' })


const connectdb =  new Database();
connectdb.ConnectToDB();

app.listen(App.PORT, () => { 
    console.log(`server running at ${App.PORT} port`);
})
