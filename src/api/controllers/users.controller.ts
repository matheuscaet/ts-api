import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'
import { Service, Container } from 'typedi'
import { UsersLogic } from '@core/domain/logic/_index';

 
@Service()
export class UsersController{

    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const items = await Container.get(UsersLogic).getAllUsers()
            return res.status(StatusCodes.OK).json({items})
        } 
        catch (error) {
            next(error)
        }
    }

    async getAllUsersFromApi(req: Request, res: Response, next: NextFunction) {
        try {
            const items = await Container.get(UsersLogic).getAllUsersFromApi()
            return res.status(StatusCodes.OK).json(items)
        } 
        catch (error) {
            next(error)
        }
    }
    
    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const item = await Container.get(UsersLogic).getUser(req.params.id)
            return res.status(StatusCodes.OK).json({item})
        } 
        catch (error) {
            next(error)
        }
    }
    
    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const item = await Container.get(UsersLogic).createUser(req.body)
            return res.status(StatusCodes.CREATED).json({item})
        } 
        catch (error) {
            next(error)
        }
    }
    
    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const item = await Container.get(UsersLogic).updateUser(req.body, req.params.id)
            return res.status(StatusCodes.OK).json({item})
        } 
        catch (error) {
            next(error)
        }
    }
    
    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const item = await Container.get(UsersLogic).deleteUser(req.params.id)
            return res.status(StatusCodes.OK).json({item})
        } 
        catch (error) {
            next(error)
        }
    }
    
}