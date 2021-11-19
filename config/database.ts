import  mongoose from "mongoose";

export class Database{

    ConnectToDB() : string {
        let errorMsg : string = '';
        mongoose
            .connect('mongodb+srv://matheuscaet:mongopassword20092021@cluster0.cfpvj.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-1023j9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true')
            .then((result) => {
                errorMsg = 'Mongo Connected'
            })
            .catch((error) => {
                errorMsg =  'Erro: ' + error.message;
            });
        
        return errorMsg;
    }



    


}


