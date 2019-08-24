"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = {
    database() {
        mongoose_1.default.connect('mongodb+srv://SVN7V:futebol1996santos@jesusdb-csczi.azure.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true
        }).then(() => {
            console.log('Conectado');
        }).catch(err => console.log(err));
    }
};
