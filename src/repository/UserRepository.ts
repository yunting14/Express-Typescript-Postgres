import { User } from "../entity/User";
import AppDataSource from "../ormconfig";

const dbManager = AppDataSource.manager;

export const r_saveUser = async (user:User):Promise<User> => {
    let createdUser = await dbManager.save(user);
    return createdUser;
}

// find all users
export const r_findAllUsers = async ():Promise<User[]> => {
    const users = await dbManager.find(User)
    return users;
}

// find user by username
export const r_findUserByUsername = async (username:string):Promise<User|null> => {
    let user = await dbManager.findOneBy(User, {username:username});
    return user;
}

// find user by user_id
export const r_findUserById = async(user_id:number):Promise<User|null> => {
    let user = await dbManager.findOneBy(User, {user_id:user_id});
    return user;
}

// update user score
export const r_updateUserLevel = async (user:User, level:string):Promise<boolean> => {
    await dbManager.update(User, {username: user.username}, {level:level});
    let updatedUser = await dbManager.findOneBy(User, {username:user.username});
    if (updatedUser?.level === level){
        return true;
    }else{
        return false;
    }
}

// delete user (change status to deleted)
export const r_changeUserStatusToDeleted = async(user:User):Promise<boolean> => {
    await dbManager.update(User, {username:user.username}, {status:"Deleted"});
    let deletedUser = await dbManager.findOne(User, {
        where:{
            username:user.username,
            status:"Deleted"
        }
    });
    if (deletedUser){
        return true;
    }else{
        return false;
    }
}