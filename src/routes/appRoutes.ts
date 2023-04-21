import express, { Express, Request, Response } from 'express';
import { createUser, deleteUser, findAllUsers, findUserByUsername, updateUserLevel } from '../controller/userController';
import { createMCQ, deleteMCQById, findAllMCQs, findMCQById } from "../controller/QuestionController"

const router = express.Router();

router.get("/api", (req:Request, res:Response) => {
    res.json("Welcome to to my typescript quiz app server!");
  })
  
// user
router.post("/api/signup", createUser);
router.get("/api/user/all", findAllUsers);
router.get("/api/user/:username", findUserByUsername);
router.put("/api/user/updateLevel", updateUserLevel);
router.delete("/api/user/delete", deleteUser);

// question
router.post("/api/question/create", createMCQ);
router.get("/api/question/all", findAllMCQs);
router.get("/api/question/find", findMCQById);
router.delete("/api/question/delete", deleteMCQById);

export default router