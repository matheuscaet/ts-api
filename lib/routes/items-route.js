"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.items = void 0;
var express_1 = require("express");
var items_controller_1 = require("../controllers/items-controller");
var typedi_1 = require("typedi");
var items = (0, express_1.Router)();
exports.items = items;
var itemsController = typedi_1.Container.get(items_controller_1.ItemsController);
items
    .route('/itens')
    .get(itemsController.getAllItems)
    .post(itemsController.createItem);
items
    .route('/item/:id')
    .get(itemsController.getItem)
    .put(itemsController.updateItem)
    .delete(itemsController.deleteItem);
