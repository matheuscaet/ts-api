import { Request, Response, NextFunction } from 'express';
import { App } from "@config/env/app.env";
import { StatusCodes } from 'http-status-codes';

export const IsAuth = (req: Request, res: Response, next: NextFunction) => {
    req.headers.authorization as string == App.API_TOKEN ? next() : 
        res.send('Unauthorized').status(StatusCodes.UNAUTHORIZED)
}