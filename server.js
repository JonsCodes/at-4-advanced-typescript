"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    res.write("<h1 style='color:red'>Hello Programmers!!!!!!!</h1>");
    res.end();
});
server.listen(3000, () => {
    console.log('Server is running!!');
});
