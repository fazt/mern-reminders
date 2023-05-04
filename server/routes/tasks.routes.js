import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controller/tasks.controller.js";

const router = Router();

// GET all Tasks
router.get("/", getTasks);

// GET all Tasks
router.get("/:id", getTask);

// ADD a new task
router.post("/", createTask);

// UPDATE a new task
router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
