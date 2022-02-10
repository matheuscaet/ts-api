import { Router} from "express";
import { Container } from 'typedi'
import { ItemsController } from "@controllers/_index";

const items = Router();
const itemsController = Container.get(ItemsController);

items
    .route('/itens')
    .get(itemsController.getAllItems)
    .post(itemsController.createItem);

items
    .route('/item/:id')
    .get(itemsController.getItem)
    .put(itemsController.updateItem)
    .delete(itemsController.deleteItem);


export { items };