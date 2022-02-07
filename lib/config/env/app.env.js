"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
exports.App = {
    PORT: parseInt(process.env.PORT || "3333"),
    URLMONGO: process.env.URLMONGO || "mongodb+srv://matheuscaet:mongopassword20092021@cluster0.cfpvj.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-1023j9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
    NAMESPACE: process.env.NAMESPACE || "SERVER"
};
