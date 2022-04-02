import  express from 'express'
import cors from 'cors'
import { Service } from 'typedi'
import * as swaggerUi from 'swagger-ui-express'
import { swagger } from '@config/swagger-config'
import  { items }  from "@routes/_index"
import { logRequest } from "@middlewares/_index"
import logging from "@shared/logging";
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

  private middlewares() : void {
    this.app
      .use(logRequest)
  }
  
  private routes() : void {
    this.app
      .use('/api', items)
      .use('/api/docs', swaggerUi.serve, swaggerUi.setup(swagger))
  }
  
  private listen() : void {
    this.app.listen(App.PORT, () => { 
      logging.info( App.NAMESPACE, `Server Running at ${App.PORT} Port`);
    })
  }

  public bootstrap(): void {
    this.config()
    this.middlewares()
    this.routes()
    this.listen()
  }
}
