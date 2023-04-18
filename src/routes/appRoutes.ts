import express, { Express, Request, Response } from 'express';
import { createUser, deleteUser, findAllUsers, findUserByUsername, updateUserScore } from '../controller/userController';

const router = express.Router();

router.get("/api", (req:Request, res:Response) => {
    res.json("Welcome to to my typescript quiz app server!");
  })
  
router.post("/api/signup", createUser);
router.get("/api/user/all", findAllUsers);
router.get("/api/user/:username", findUserByUsername);
router.put("/api/user/updateScore/:score", updateUserScore);
router.delete("/api/user/delete/:username", deleteUser);

export default router