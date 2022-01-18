import  mongoose from "mongoose";
import { App } from "./env/app.env";

export class Database{

    ConnectToDB() : string {
        let errorMsg : string = '';
        
        mongoose
            .connect(App.URLMONGO)
            .then((result) => {
                errorMsg = 'Mongo Connected'
            })
            .catch((error) => {
                errorMsg =  'Erro: ' + error.message;
            });
        
        return errorMsg;
    }
}


