import  express from 'express'
import cors from 'cors'
import { Service } from 'typedi'
import  { items }  from "@routes/_index"
import { logRequest } from "@middlewares/_index"
import logging from "@config/logging";
import { App } from "@config/env/_index";
@Service()
export class ExpressConfig {
  private app: express.Application
  constructor(){ this.app = express() }

  private config(): void {
    this.app
      .use(express.json())
      .use(express.text())
      .use(express.raw())
      .use(express.urlencoded({ extended: true }))
      .use(
        cors({
          origin: '*',
          methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
          preflightContinue: false,
          optionsSuccessStatus: 204,
        }),
      )
  }
  
  private routes() : void {
    this.app
      .use(items)
      .use(logRequest)
  }
  
  private listen() : void {
    this.app.listen(App.PORT, () => { 
      logging.info( App.NAMESPACE, `server running at ${App.PORT} port`);
    })
  }

  public bootstrap(): void {
    this.config()
    this.routes()
    this.listen()
  }
}
