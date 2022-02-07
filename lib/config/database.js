"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var app_env_1 = require("./env/app.env");
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.ConnectToDB = function () {
        var errorMsg = '';
        mongoose_1.default
            .connect(app_env_1.App.URLMONGO)
            .then(function (result) {
            errorMsg = 'Mongo Connected';
        })
            .catch(function (error) {
            errorMsg = 'Erro: ' + error.message;
        });
        return errorMsg;
    };
    return Database;
}());
exports.Database = Database;
