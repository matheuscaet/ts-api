import { Router } from "express";
import itensController from "./controllers/itensController";

const routes = Router();

routes
    .route('/itens')
    .get(itensController.getAllItems)
    .post(itensController.createItem);

routes
    .route('/item/:id')
    .get(itensController.getItem)
    .put(itensController.updateItem)
    .delete(itensController.deleteItem);


export default routes;