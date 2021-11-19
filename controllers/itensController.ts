import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Item from '../models/item';
import { Database } from '../config/database';

const connectdb =  new Database().ConnectToDB();


const createItem = (req: Request, res: Response, next: NextFunction) => {

    let { name, desc } = req.body;

    const item = new Item({
        _id: new mongoose.Types.ObjectId(),
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

export default { createItem, getAllItems };