import { User } from "../entity/User";
import { saveUser } from "../repository/UserRepository";

export const serviceCreateNewUser = (username:string, password:string):Promise<User> => {
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.level = "Beginner";
    newUser.status = "Active";
    let createdUser = saveUser(newUser);
    return createdUser;
}