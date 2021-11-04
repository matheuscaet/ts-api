import { Router } from "express";
import itensController from "../controllers/itensController";
import  mongoose from "mongoose";


const routes = Router();

/** Connect to Mongo */
mongoose
    .connect('mongodb+srv://matheuscaet:mongopassword20092021@cluster0.cfpvj.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-1023j9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true')
    .then((result) => {
        console.log('Mongo Connected');
    })
    .catch((error) => {
        console.log( 'Erro: ' + error.message);
    });

routes.get('/itens', itensController.getAllItems);
routes.post('/itens', itensController.createItem);


export default routes;