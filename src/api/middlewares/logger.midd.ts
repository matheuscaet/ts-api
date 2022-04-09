import { Request, Response, NextFunction } from 'express';
import logging from "@shared/logging";
import { App } from "@config/env/app.env";

export const logRequest = (req : Request, res : Response, next : NextFunction) => {
    logging.info(App.NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(App.NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    next();
};