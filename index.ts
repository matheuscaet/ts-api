import  express from "express";
import routes from "./src/routes";
import { App } from "./src/config/env/app.env";
import { logRequest } from "./src/middlewares/logger.midd"
import 'reflect-metadata';

require('dotenv').config({ path: '.env' })

const app = express();
app.use(express.json());
app.use(logRequest);
app.use(routes);

app.listen(App.PORT, () => { 
    console.log(`server running at ${App.PORT} port`);
})
