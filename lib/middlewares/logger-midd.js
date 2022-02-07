"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequest = void 0;
var logging_1 = __importDefault(require("../config/logging"));
var app_env_1 = require("../config/env/app.env");
var logRequest = function (req, res, next) {
    logging_1.default.info(app_env_1.App.NAMESPACE, "METHOD: [" + req.method + "] - URL: [" + req.url + "] - IP: [" + req.socket.remoteAddress + "]");
    res.on('finish', function () {
        logging_1.default.info(app_env_1.App.NAMESPACE, "METHOD: [" + req.method + "] - URL: [" + req.url + "] - STATUS: [" + res.statusCode + "] - IP: [" + req.socket.remoteAddress + "]");
    });
    next();
};
exports.logRequest = logRequest;
