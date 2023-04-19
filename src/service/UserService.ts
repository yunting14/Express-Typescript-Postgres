import { findUserByUsername } from "../controller/userController";
import { User } from "../entity/User";
import { r_changeUserStatusToDeleted, r_findAllUsers, r_findUserByUsername, r_saveUser, r_updateUserLevel } from "../repository/UserRepository";

export const s_createNewUser = (username:string, password:string):Promise<User> => {
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.level = "Beginner";
    newUser.status = "Active";
    let createdUser = r_saveUser(newUser);
    return createdUser;
}

// find all users
export const s_findAllUsers = async ():Promise<User[]> => {
    let users = await r_findAllUsers();
    return users;
}

// find user by username
export const s_findUserByUsername = async (username:string):Promise<User|null> => {
    return await r_findUserByUsername(username);
}

// update user score
export const s_updateUserLevel = async (username:string, level:string):Promise<boolean> => {
    let user = await r_findUserByUsername(username);
    if (user){
        let success:boolean = await r_updateUserLevel(user, level);
        return success;
    }
    return false;
}

// delete user (change status to deleted)
export const s_deleteUser = async (username:string):Promise<boolean> => {
    let user = await r_findUserByUsername(username);
    if (user){
        let deleted:boolean = await r_changeUserStatusToDeleted(user);
        return deleted;
    }
    return false;
}