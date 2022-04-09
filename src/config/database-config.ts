import  mongoose from "mongoose";
import { Service } from "typedi";
import { App } from "./env/app.env";
import logging from "@shared/logging";
@Service()
export class Database{

    ConnectToDB() : void {
        mongoose
            .connect(App.URLMONGO)
            .then((result) => {
                logging.info(App.NAMESPACE, `Database Connected v${result.version}`)
            })
            .catch((error) => {
                logging.error(App.NAMESPACE, `Database error: ${error.message}`)
            });
    }
}


