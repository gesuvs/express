"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class Config {
    constructor() {
        this.express = express_1.default();
        this.middlewares();
    }
    middlewares() {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    }
}
const config = new Config();
exports.default = config;
