import express from "express";
import { getUsers, regUsers } from "../controller/Users.js";

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', regUsers);

export default router;