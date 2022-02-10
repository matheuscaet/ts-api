import 'reflect-metadata'
import { ExpressConfig, Database } from "@config/_index";
import Container from 'typedi';
require('dotenv').config({ path: '.env' });

;(async () => {
    await Container.get(Database).ConnectToDB()
    await Container.get(ExpressConfig).bootstrap()
})()