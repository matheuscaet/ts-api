import  express from 'express';
import  { items }  from "../routes/_index";
import cors from 'cors'
import { logRequest } from "../middlewares/_index"
import { json, text, raw, urlencoded } from 'body-parser'


const app = express();
app
  .use(json())
  .use(text())
  .use(raw())
  .use(urlencoded({ extended: true }))
  .use(
    cors({
      origin: '*',
      methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }),
  )
  .use(logRequest)
  .use(items)


export { app }
