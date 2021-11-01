import { Router } from "express";
import itensController from "../controllers/itensController";


const routes = Router();

routes.get('/itens', itensController.index);
routes.post('/itens', itensController.create);


export default routes;