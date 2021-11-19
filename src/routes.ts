import { Router } from "express";
import itensController from "../controllers/itensController";
import { Database } from "../config/database";

const routes = Router();

routes.get('/itens', itensController.getAllItems);
routes.post('/itens/create', itensController.createItem);

export default routes;