import { NextFunction, Request, Response } from 'express';
import { mongo } from 'mongoose';
import Item from '../models/item';
import { Database } from '../config/database';
import BSON = require('bson');

const connectdb =  new Database().ConnectToDB(); 

const getAllItems = (req: Request, res: Response, next: NextFunction) => {
    Item.find()
        .exec()
        .then((Items) => {
            return res.status(200).json({
                Items: Items,
                count: Items.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const createItem = (req: Request, res: Response, next: NextFunction) => {

    let { name, desc } = req.body;

    const item = new Item({
        _id: new mongo.ObjectId ,
        name,
        desc
    });

    return item
        .save()
        .then((result) => {
            return res.status(201).json({
                Item: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const updateItem = (req: Request, res: Response, next: NextFunction) => {

    let { name, desc } = req.body;
    const id: BSON.ObjectId = new BSON.ObjectId(req.params.id);

    const nitem = new Item({
        name,
        desc
    });

    return Item
        .findOneAndUpdate({_id: id}, {name: name, desc: desc})
        .then((result) => {
            return res.status(201).json({
                Item: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const deleteItem = (req: Request, res: Response, next: NextFunction) => {

    const id: BSON.ObjectId = new BSON.ObjectId(req.params.id);

    return Item
        .findOneAndDelete({_id: id})
        .then((result) => {
            return res.status(201).json({
                Item: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { createItem, getAllItems, updateItem, deleteItem };