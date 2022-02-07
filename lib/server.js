"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var _index_1 = require("./routes/_index");
var app_env_1 = require("./config/env/app.env");
var _index_2 = require("./middlewares/_index");
var database_1 = require("./config/database");
require('dotenv').config({ path: '.env' });
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(_index_2.logRequest);
app.use(_index_1.items);
var connectdb = new database_1.Database();
connectdb.ConnectToDB();
app.listen(app_env_1.App.PORT, function () {
    console.log("server running at " + app_env_1.App.PORT + " port");
});
