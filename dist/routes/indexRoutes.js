"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        // constructor() {
        //     this.indexRoutes()
        // }
        // public indexRoutes(): void {
        //     this.router.get('/', indexController.index)
        // }
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
