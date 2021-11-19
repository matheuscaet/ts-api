import { Router } from "express";
import itensController from "../controllers/itensController";

const routes = Router();

routes.get('/itens', itensController.getAllItems);
routes.post('/itens/create', itensController.createItem);

export default routes;