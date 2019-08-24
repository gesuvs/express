"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("../database/keys"));
const config_1 = __importDefault(require("../middlewares/config"));
const app_1 = __importDefault(require("../app/app"));
class Server {
    // public express: express.Application
    constructor() {
        // this.express = express()
        this.databaseConnect();
        this.config();
        // this.routes()
        this.app();
    }
    config() {
        config_1.default.middlewares();
    }
    databaseConnect() {
        keys_1.default.database();
    }
    // private routes():void{
    //   indexRoutes.indexRoutes()
    // }
    app() {
        app_1.default.start();
    }
}
exports.default = new Server();
