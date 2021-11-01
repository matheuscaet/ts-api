import { Request, Response } from 'express';


export default {
    async index(req: Request, res: Response) {
      return res.status(200).send("get its ok");
    },
  
    async create(req: Request, res: Response) {
        return res.status(200).send("post its ok");
    }
  };