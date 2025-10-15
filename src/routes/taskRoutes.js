import express from "express";
import { handleTask, getAllTasks } from "../controllers/taskController.js";

const router = express.Router();

// POST /task
router.post("/task", handleTask);
// GET /task
router.get('/task', getAllTasks);


export default router;
