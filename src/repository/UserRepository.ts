import { User } from "../entity/User";
import AppDataSource from "../ormconfig";

const dbManager = AppDataSource.manager;

export const saveUser = async (user:User):Promise<User> => {
    await dbManager.save(user);
    return user;
}

// export default interface UserRepository{
//     saveUser(user:User):User;
//     findAllUsers():User[];
//     findUserByUsername(username:string):User;
//     updateUserScore(score:number):User;
//     deleteUser(user:User):User;
// }