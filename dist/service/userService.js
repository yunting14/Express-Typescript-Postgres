"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceCreateNewUser = void 0;
var User_1 = require("../entity/User");
var UserRepository_1 = require("../repository/UserRepository");
var serviceCreateNewUser = function (username, password) {
    var newUser = new User_1.User();
    newUser.username = username;
    newUser.password = password;
    newUser.level = "Beginner";
    newUser.status = "Active";
    var createdUser = (0, UserRepository_1.saveUser)(newUser);
    return createdUser;
};
exports.serviceCreateNewUser = serviceCreateNewUser;
