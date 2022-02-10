import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'
import { Service, Container } from 'typedi'
import { ItemsLogic } from '@logic/_index';

 
@Service()
export class ItemsController{

    async getAllItems(req: Request, res: Response, next: NextFunction) {
        try {
            const items = await Container.get(ItemsLogic).getAllItems()
            return res.status(StatusCodes.OK).json({items})
        } 
        catch (error) {
            next(error)
        }
    }
    
    async getItem(req: Request, res: Response, next: NextFunction) {
        try {
            const item = await Container.get(ItemsLogic).getItem(req.params.id)
            return res.status(StatusCodes.OK).json({item})
        } 
        catch (error) {
            next(error)
        }
    }
    
    async createItem(req: Request, res: Response, next: NextFunction) {
        try {
            const item = await Container.get(ItemsLogic).createItem(req.body)
            return res.status(StatusCodes.CREATED).json({item})
        } 
        catch (error) {
            next(error)
        }
    }
    
    async updateItem(req: Request, res: Response, next: NextFunction) {
        try {
            const item = await Container.get(ItemsLogic).updateItem(req.body, req.params.id)
            return res.status(StatusCodes.OK).json({item})
        } 
        catch (error) {
            next(error)
        }
    }
    
    async deleteItem(req: Request, res: Response, next: NextFunction) {
        try {
            const item = await Container.get(ItemsLogic).deleteItem(req.params.id)
            return res.status(StatusCodes.OK).json({item})
        } 
        catch (error) {
            next(error)
        }
    }
    
}