"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Request and Response interface
var dotenv_1 = __importDefault(require("dotenv"));
var appRoutes_1 = __importDefault(require("./routes/appRoutes"));
var body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
var app = (0, express_1.default)();
// const port = process.env.PORT; // undefined
var port = 8080;
app.listen(port, function () {
    console.log("Server is running on port 8080");
});
app.use(body_parser_1.default.json());
app.use("/", appRoutes_1.default);
