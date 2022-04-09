import { Router} from "express";
import { Container } from 'typedi'
import { ItemsController } from "@controllers/_index";
import { IsAuth } from "@api/middlewares/_index";

const items = Router();
const itemsController = Container.get(ItemsController);

items
    .route('/itens')
    .get(IsAuth, itemsController.getAllItems)
    .post(IsAuth, itemsController.createItem);

items
    .route('/item/:id')
    .get(IsAuth, itemsController.getItem)
    .put(IsAuth, itemsController.updateItem)
    .delete(IsAuth, itemsController.deleteItem);


export { items };