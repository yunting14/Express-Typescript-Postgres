"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "yunting",
    database: "simpletsappdb",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/**/*.{js,ts}"],
    migrations: [],
    subscribers: [],
});
AppDataSource.initialize()
    .then(function () {
    console.log("Data Source Initialised");
})
    .catch(function (error) {
    console.log("Data source initialisation error");
    console.log(error.message);
});
exports.default = AppDataSource;
