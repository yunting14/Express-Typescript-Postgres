import { Request, Response } from "express";
import { s_createNewUser, s_deleteUser, s_findAllUsers, s_findUserByUsername, s_updateUserLevel } from "../service/UserService";
import { User } from "../entity/User";

export async function createUser(req:Request, res:Response) {
    let username:string = req.body.username;
    let password:string = req.body.password;
    let createdUser = await s_createNewUser(username, password);
    res.json(createdUser);
    // res.json("You have successfully signed up!");
}

export async function findAllUsers(req:Request, res:Response) {
    let users = await s_findAllUsers();
    console.log(users);
    res.json(users);
    // res.json("You are viewing all users");
}

export async function findUserByUsername(req:Request, res:Response) {
    let username = req.params.username;
    let user = await s_findUserByUsername(username);
    if (user == null){
        res.json(`No user with username [${username}] found`);
    }else{
        res.json(user);
    }
    // res.json(`You have found your user ${username}`);
}

export async function updateUserLevel(req:Request, res:Response){
    let username = req.body.username;
    let level = req.body.level;
    let success = await s_updateUserLevel(username, level);
    if (success){
        res.json(`User level updated to ${level}!`);
    }else{
        res.json("Error. Unable to update level");
    }
}

export async function deleteUser(req:Request, res:Response){
    let username = req.body.username;
    let deleted:boolean = await s_deleteUser(username);
    if (deleted){
        res.json(`User with username "${username}" deleted`);
    }else{
        res.json("Unable to delete user. Please try again later.")
    }
    

}