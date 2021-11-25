import { Router } from "express";
import itensController from "../controllers/itensController";

const routes = Router();

routes.get('/itens', itensController.getAllItems);
routes.post('/itens/create', itensController.createItem);
routes.put('/itens/:id', itensController.updateItem);
routes.delete('/itens/:id', itensController.deleteItem);


export default routes;