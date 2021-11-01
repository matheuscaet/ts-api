"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = (0, express_1.Router)();
routes.get("/", function (req, res) {
    return res.send("ok get");
});
exports.default = routes;
