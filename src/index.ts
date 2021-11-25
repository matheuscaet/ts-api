import  express from "express";
import routes from "./routes";
import { App } from "../config/env/app.env";
import logging from "../config/logging"

require('dotenv').config({ path: '.env' })

const app = express();

/** Log the request */
app.use((req, res, next) => {
    /** Log the req */
    logging.info(App.NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(App.NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    
    next();
});

app.use(express.json());
app.use(routes);

app.listen(App.PORT, () => { 
    console.log(`server running at ${App.PORT} port`);
})
