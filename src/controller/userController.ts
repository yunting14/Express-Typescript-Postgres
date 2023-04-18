import { Request, Response } from "express";
import { serviceCreateNewUser } from "../service/UserService";
import { User } from "../entity/User";

export async function createUser(req:Request, res:Response) {
    let username:string = req.body.username;
    let password:string = req.body.password;
    let createdUser = await serviceCreateNewUser(username, password);
    res.json(createdUser);
    // res.json("You have successfully signed up!");
}

export async function findAllUsers(req:Request, res:Response) {
    res.json("You are viewing all users");
}

export async function findUserByUsername(req:Request, res:Response) {
    let username = req.params.username;
    res.json(`You have found your user ${username}`);
}

export async function updateUserScore(req:Request, res:Response){
    let score = req.params.score;
    res.json(`User score updated to ${score}!`);
}

export async function deleteUser(req:Request, res:Response){
    let username = req.params.username;
    res.json(`User with username "${username}" deleted`);
}