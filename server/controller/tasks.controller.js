import Task from "../models/task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description });
  await task.save();
  return res.json(task);
};

export const updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const deletedTask = await Task.findByIdAndRemove(req.params.id);
  if (!deletedTask) return res.status(404).json({ message: "Task not found" });
  return res.sendStatus(204);
};
