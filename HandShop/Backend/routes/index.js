import express from "express";
import { getUsers, regUsers, login } from "../controller/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', regUsers);
router.post('/login', login);

export default router;