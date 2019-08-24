"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        // this.settings()
        this.app = express_1.default();
        this.start();
    }
    start() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port `, this.app.get('port'));
        });
    }
}
const app = new App();
exports.default = app;
